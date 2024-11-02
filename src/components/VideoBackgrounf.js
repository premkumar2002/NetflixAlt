import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useGetMovieVideos";

const VideoBackgrounf = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideos);
  useMovieTrailer({movieId});

  return (
    <div>
      <iframe
        className="w-screen aspect-video h-[110vh]"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackgrounf;
