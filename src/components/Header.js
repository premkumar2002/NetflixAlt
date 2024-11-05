import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebas";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, user_logo, SLANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const CustomDropdown = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between bg-red-700 rounded-full px-2 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="pl-1">{selected.name}</span>
        <svg
          className={`w-4 h-4 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 8l5 5 5-5"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-black text-white rounded shadow-lg w-14 max-h-40 overflow-y-auto custom-dropdown">
          {options.map((option) => (
            <div
              key={option.identifier}
              className="px-2 py-1 hover:bg-red-700 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.config.lang); // Access selected language from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLangChange = (selectedOption) => {
    dispatch(changeLanguage(selectedOption.identifier)); // Dispatch the selected language identifier to Redux
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) =>
        navigate("/error", { state: { message: error.message } })
      );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSearchClick = () => dispatch(toggleGptSearchView());
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-1 md:px-8 md:py-4 py-2 bg-gradient-to-b from-black w-screen flex items-start md:justify-between flex flex-auto md:flex-row justify-between">
      <img src={LOGO} alt="logo" className="h-16 w-auto cursor-pointer" />
      {user && (
        <div className="relative flex items-center space-x-2">
          {showGptSearch && (
            <CustomDropdown
              options={SLANG}
              selected={SLANG.find((lang) => lang.identifier === selectedLang)} // Select language based on Redux state
              onChange={handleLangChange}
            />
          )}

          <button
            type="submit"
            className="flex items-center text-md font-medium text-white bg-black rounded-full bg-opacity-100 hover:bg-opacity-30 transition duration-200 p-2 w-15"
            onClick={handleSearchClick}
          >
            <span className="mr-2">{!showGptSearch ? "Search" : "Home"}</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <img
            src={user_logo}
            alt="user logo"
            className="md:w-10 w-6 cursor-pointer rounded-md"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-[66%] bg-black text-white rounded shadow-lg p-1">
              <button
                className="block w-full text-sm hover:underline"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
