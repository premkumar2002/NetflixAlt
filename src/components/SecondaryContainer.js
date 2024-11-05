import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="w-screen pt-12 md:pt-0">
        <div className="relative z-10 -mt-10 md:-mt-80 mx-4 md:mx-auto ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
