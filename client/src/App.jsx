import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // fetch(
  //   "https://api.themoviedb.org/3/discover/movie?api_key=237e21f511ab3b26eab3c3968be39066&sort_by=popularity.desc"
  // )
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
