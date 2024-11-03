import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MinContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <div>
        <MinContainer />
        <SecondaryContainer />
      </div>
      {/*
        Main conatiner
          - video backround
          - video title
        secondary conatiner
          - MovieList * n
            - cards * n
      */}
    </div>
  );
};

export default Browse;
