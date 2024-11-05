import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies} from "../utils/movieSlice"
import { useEffect } from "react";
import { API_Options } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    if(!upcomingMovies) getUpComingMovies();
  }, []);
};

export default useUpComingMovies;