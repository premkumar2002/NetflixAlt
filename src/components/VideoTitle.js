import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview((prev) => !prev);
  };

  return (
    <div className="w-screen px-8 pt-[40%] absolute aspect-video">
      <h1 className="font-extrabold text-4xl pb-2 text-white">{title}</h1>
      {showOverview && (
        <p className="italic text-sm w-3/4 text-white">{overview}</p>
      )}
      <div className="flex space-x-2 pt-4 mb-10">
        <button className="border border-gray p-2 px-6 font-mono font-extrabold  text-1xl rounded-md bg-white text-slate-950 hover:bg-opacity-90">
          ▶ Play
        </button>
        <button
          onClick={toggleOverview}
          className="border border-gray p-2 px-4 font-serif rounded-md text-white bg-gray-500 bg-opacity-25 hover:bg-opacity-10"
        >
          ⓘ {showOverview ? "Less Info" : "More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
