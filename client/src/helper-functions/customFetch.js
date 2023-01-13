const BASE_URL = "https://api.themoviedb.org/3/";

// console.log(
//   "https://example.com?" +
//     new URLSearchParams({
//       foo: "value",
//       bar: 2,
//     })
// ); // returns https://example.com?foo=value&bar=2

const customFetch = async (substr, paramObj, movie_url = BASE_URL) => {
  let queryUrl = `${movie_url}${substr}?` + new URLSearchParams(paramObj);
  const response = await fetch(queryUrl);
  return response.json();
};

export default customFetch;
  // fetch(
  //   "https://api.themoviedb.org/3/discover/movie?api_key=237e21f511ab3b26eab3c3968be39066&sort_by=popularity.desc"
  // )
  //   .then((response) => response.json())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));