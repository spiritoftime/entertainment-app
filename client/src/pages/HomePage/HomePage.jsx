import { useState, useEffect } from "react";
import Movie from "./Movie";
import customFetch from "../../helper-functions/customFetch";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      const response = await customFetch("discover/movie/", {
        sort_by: "popularity.desc",
        api_key: "237e21f511ab3b26eab3c3968be39066",
      });
      setMovies(response.results);
    };
    getAllMovies();
  }, []);

  if (!movies) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-2 gap-x-3.5 bg-darkBlue p-4">
      {movies.map((movie) => (
        <Movie
          backdrop={movie.backdrop_path}
          key={movie.id}
          id={movie.id}
          date={movie.release_date}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default HomePage;
