import {useState,useEffect} from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      setMovies(
        await customFetch("discover/movie/", {
          sort_by: "popularity.desc",
          api_key: "237e21f511ab3b26eab3c3968be39066",
        })
      );
    };
    getAllMovies();
  }, []);
  return movies.map((movie)=>);
};

export default HomePage;
