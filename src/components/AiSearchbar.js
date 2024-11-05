import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react"; // Import useState
import openapi from "../utils/openai";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const AiSearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // State for managing error messages
  const [errorMessage, setErrorMessage] = useState("");

  const serachTmdbMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      const query =
        "Act as a Movie Recommendation system and suggest some movie for the query: " +
        searchText.current.value +
        ". only give me names of 5 movies, comma separated.";
      const completion = await openapi.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
        temperature: 0.7,
        max_tokens: 100,
      });

      const response = completion.choices?.[0]?.message?.content.split(",");

      if (!response || response.length === 0) {
        throw new Error("No movies returned from GPT.");
      }

      const promiseArray = response.map((movie) =>
        serachTmdbMovie(movie.trim())
      );
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: response, movieResults: tmdbResults })
      );

      setErrorMessage("");
    } catch (error) {
      console.error("Error during API call:", error);
      setErrorMessage("Change the prompt");
    }
  };

  return (
    <div className="pt-[8%] px-4">
      <form
        className="bg-black rounded-full mx-auto text-center flex justify-between items-center max-w-xl sm:max-w-2xl lg:max-w-3xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-2 w-full sm:w-[80%] lg:w-[85%] rounded-full text-center"
          type="text"
          placeholder={lang[langkey].gptPlaceHolder}
        />
        <button
          className="py-4 px-2 mr-2 w-[20%] sm:w-[15%] lg:w-[12%] bg-red-600 text-white rounded-full"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>

      {/* Conditional rendering of error message */}
      {errorMessage && (
        <p className="text-red-500 text-center mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default AiSearchbar;
