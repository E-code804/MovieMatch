import { useEffect, useState } from "react";
import OptionBtn from "./OptionBtn";

const MovieDisplay = () => {
  const [optionType, setOptionType] = useState("Now Playing");
  const [clickedBtn, setClickedBtn] = useState("Now Playing");
  const [movieList, setMovieList] = useState(null);
  const options = ["Now Playing", "Popular", "Upcoming", "Top Rated"];

  const convertToLowerUnderscore = (str) =>
    str.toLowerCase().replace(/\s+/g, "_");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${convertToLowerUnderscore(
      optionType
    )}?language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDk0MDcyYmJkNTY1MzI1ODdiNGFlMTg4ODM1NGRlNyIsInN1YiI6IjY0Y2QwZTY2MmYyNjZiMDllZjEyNGJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8_WIFjbbnUCeqvUzdNLXwZHHQzVq6iEjOl7Dxispzpo",
      },
    };
    const fetchData = async () => {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovieList(data.results);
    };
    fetchData();
  }, [optionType]);
  return (
    <div className="w-full p-12 flex flex-col items-center">
      <div className="Movie-Trends w-full">
        <h1 className="text-5xl">See What is Trending</h1>
        <div className="flex space-x-4 mt-4">
          {options.map((option, index) => (
            <OptionBtn
              key={index}
              option={option}
              setOptionType={setOptionType}
              clickedBtn={clickedBtn}
              setClickedBtn={setClickedBtn}
            />
          ))}
        </div>
      </div>

      <div className="movie-list w-full grid grid-cols-1 gap-4 md:grid-cols-3 mt-8">
        {movieList &&
          movieList.map((movie, index) => (
            <div className="movie-card w-full" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {/* <h2>{movie.title}</h2>
          <p>{movie.overview}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieDisplay;
