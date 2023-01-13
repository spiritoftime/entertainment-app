import { useState, useEffect } from "react";
import Movie from "./Movie";

import Navbar from "../../shared components/Navbar";
import LoadingSpinner from "../../shared components/LoadingSpinner";

import useHomeFetches from "../../custom hooks/useHomeFetches";
const HomePage = () => {
  const fetchedData = useHomeFetches();
  console.log(fetchedData);
  if (fetchedData === {}) return <LoadingSpinner />;
  // const { trending, top, upcoming, popular, nowPlaying } = fetchedData;
  const { popular } = fetchedData;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3.5 lg:gap-10   p-4">
        {/* need to check for popular && or there will be error */}
        {popular.map((movie) => (
          <Movie
            backdrop={movie.backdrop_path}
            key={movie.id}
            id={movie.id}
            date={movie.release_date}
            title={movie.title}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
