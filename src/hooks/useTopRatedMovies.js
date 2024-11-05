import { useDispatch, useSelector } from "react-redux";
import { addTopratedMovies} from "../utils/movieSlice"
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmQzOWQxZDc0MDY5NjdiNjE4ZTAwNTE2MjdhM2RmZiIsIm5iZiI6MTczMDc4NjA5MS41NTE2NTksInN1YiI6IjY2MjRmODkwMjU4ODIzMDE2NDkwZWMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J_CA-Hic7BWx7KxoT8wbD3qLuGObnuw6IJ38JpQlPes'
    }
  };
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;