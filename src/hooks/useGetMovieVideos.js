import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { addTrailerVideos } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const useMovieTrailer = ({movieId}) => {
  const dispatch = useDispatch();
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
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
