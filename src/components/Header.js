import React, { useState, useEffect } from 'react';
import { auth } from "../utils/firebas";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
 import { LOGO, user_logo } from '../utils/constants';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error", {state : {message: error.message}});
    });    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);


  return (
    <div className="absolute px-8 py-6 bg-gradient-to-b from-black z-10 w-screen flex items-start justify-between">
      <img 
        src={LOGO}
        alt="logo" 
        className="h-16 w-auto cursor-pointer" // Set height and auto width
      />
      {user && (
        <div className="relative">
        <img
          src={user_logo}
          alt="user logo"
          className="w-10 cursor-pointer rounded-md mr-3"
          onClick={toggleDropdown} // Toggle dropdown on user logo click
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-1 bg-black text-white rounded shadow-lg w-16 p-1">
            <button className="block w-24 text-sm text-left px-0 py-0 hover:underline " onClick={handleSignOut}>
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