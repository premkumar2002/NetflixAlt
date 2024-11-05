import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview((prev) => !prev);
  };

  return (
    <div className="w-full md:px-8 md:pt-[27%] absolute aspect-video pt-[45%] px-3 z-10">
      <h1 className="font-extrabold md:text-4xl pb-2 text-white">{title}</h1>
      {showOverview && (
        <p className="italic md:text-[20px] text-[9px] md:w-3/4 text-white">{overview}</p>
      )}
      <div className="flex space-x-2 md:pt-4 md:mb-10 pt-1">
        <button className="border border-gray md:p-2 md:px-6 font-mono font-extrabold md:text-[80%] text-[10px] rounded-md bg-white text-slate-950 hover:bg-opacity-90">
          ▶ Play
        </button>
        <button
          onClick={toggleOverview}
          className="border border-gray md:p-2 md:px-4 font-serif rounded-md text-white bg-gray-500 bg-opacity-25 hover:bg-opacity-10 text-[8px] md:text-[80%]"
        >
          ⓘ {showOverview ? "Less Info" : "More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
