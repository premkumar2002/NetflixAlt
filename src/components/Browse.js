import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MinContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      < MinContainer />
      < SecondaryContainer />
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
