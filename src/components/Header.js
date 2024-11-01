import { useState } from "react";
import { auth } from "../utils/firebas";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
 

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });    
  }

  return (
    <div className="absolute px-8 py-6 bg-gradient-to-b from-black z-10 w-screen flex items-start justify-between">
      <img 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="logo" 
        className="h-16 w-auto cursor-pointer" // Set height and auto width
      />
      {user && (
        <div className="relative">
        <img
          src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
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