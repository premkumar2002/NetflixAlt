// AISearch.js
import React from "react";
import AiSearchbar from "./AiSearchbar";
import MoviesSuggestions from "./MoviesSuggestions";
import { LOGINBG } from "../utils/constants";

const AISearch = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed inset-0 -z-10">
      <img
          src={LOGINBG}
          alt="LoginBG"
          className="h-full w-full object-cover"
        />
      </div>
      <AiSearchbar />
      <MoviesSuggestions />
    </div>
  );
};

export default AISearch;
