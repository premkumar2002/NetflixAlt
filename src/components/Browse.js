import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MinContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import AISearch from "./AISearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <AISearch />
      ) : (
        <>
          <MinContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
