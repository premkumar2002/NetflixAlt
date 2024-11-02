import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const Error = ({ errorCode }) => {
  const location = useLocation();
  const errorMessage = location.state?.message || "An unexpected error occurred.";
  const error = useRouteError();

  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <img 
        alt="error background" 
        src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png" 
        className="absolute inset-0 object-cover w-full h-full z-0" // Background image
      />
      
      {/* Full-width black background for the logo */}
      <div className="w-full bg-black flex items-center p-4">
        {/* Netflix Logo */}
        <img 
          src="https://assets.nflxext.com/en_us/home/logo_v7.png" 
          alt="Netflix Logo" 
          className="h-12 w-36 m-6 p-2 z-20 bg-black" // Logo styling
        />
      </div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Error Message Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
        <h1 className="text-6xl font-bold p-6">Lost your way?</h1>
        <p className="mt-2 text-3xl mx-20 my-3 text-center">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        <p className="mt-4 text-lg">{errorMessage}</p> {/* Displaying the error message */}
      </div>
    </div>
  );
};

export default Error;