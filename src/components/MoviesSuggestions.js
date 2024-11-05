import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  // Log for debugging


  return (
    <div className="m-9 ml-4 p-4 z-10 rounded-md">
      <div className="bg-black bg-opacity-85">
        {movieNames.map((movieName, index) => (
          <MovieList 
            key={index} 
            title={movieName} 
            movies={movieResults[index]} 
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesSuggestions;