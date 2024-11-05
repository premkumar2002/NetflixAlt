import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { addTrailerVideos } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";


const useMovieTrailer = ({movieId}) => {
  const dispatch = useDispatch();

  const trailer = useSelector(store => store.movies.trailerVideos)
  const getMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_Options
    );
    const json = await response.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    if(!trailer) getMovieVideo();
  }, []);
};

export default useMovieTrailer;
