import { useState, useEffect } from "react";
import customFetch from "./helper-functions/customFetch";
import "./App.css";
let allMovies = [];
function App() {
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
  console.log(movies);
  // fetch(
  //   "https://api.themoviedb.org/3/discover/movie?api_key=237e21f511ab3b26eab3c3968be39066&sort_by=popularity.desc"
  // )
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
