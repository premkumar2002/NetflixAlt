import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4 pl-6">
      <h1 className="font-semibold text-3xl pb-2 text-white font-mono">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-8">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} title={movie.title} year={movie.release_date} overview={movie.overview}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
