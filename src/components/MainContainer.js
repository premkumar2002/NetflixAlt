import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackgrounf";

const MinContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(movies === null) return;

  const mainmovie = movies[2];
  const {original_title, overview, id} = mainmovie;
  
  return (
    <div className="relative overflow-hidden pb-12 md:pb-24">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MinContainer;
