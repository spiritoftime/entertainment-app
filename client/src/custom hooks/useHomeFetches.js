import { useEffect, useReducer } from "react";
import customFetch from "../helper-functions/customFetch";

function fetchReducer(state, action) {
  if (action.type === "top") return { ...state, top: action.payload };
  else if (action.type === "trending")
    return { ...state, trending: action.payload };
  else if (action.type === "upcoming")
    return { ...state, upcoming: action.payload };
  else if (action.type === "popular") {
    return { ...state, popular: action.payload };
  } else if (action.type === "nowPlaying")
    return { ...state, nowPlaying: action.payload };
}

const useHomeFetches = () => {
  const [fetchedData, dispatch] = useReducer(fetchReducer, {});

  const getPopularMovies = async () => {
    const response = await customFetch("discover/movie/", {
      sort_by: "popularity.desc",
    });
    console.log(response.results);
    dispatch({ type: "popular", payload: response.results });
  };
  const getTopMovies = async () => {
    const response = await customFetch("movie/top_rated");
    dispatch({ type: "top", payload: response.results });
  };
  const getTrendingMovie = async () => {
    const response = await customFetch("trending/movie/week");
    dispatch({ type: "trending", payload: response.results });
  };
  const getNowPlayingMovies = async () => {
    const response = await customFetch("movie/now_playing");
    dispatch({ type: "nowPlaying", payload: response.results });
  };
  const getUpcomingMovies = async () => {
    const response = await customFetch("movie/upcoming");
    dispatch({ type: "upcoming", payload: response.results });
  };

  // getTrendingMovie();
  // getTopMovies();
  // getUpcomingMovies();
  useEffect(() => {
    getPopularMovies();
    // getTopMovies();
  }, []);
  // getNowPlayingMovies();

  return fetchedData;
};

export default useHomeFetches;
