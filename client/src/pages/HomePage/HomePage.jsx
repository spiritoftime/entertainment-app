import Movie from "./Movie";
import classes from "./homepage.module.css";

import Navbar from "../../shared components/Navbar";
import LoadingSpinner from "../../shared components/LoadingSpinner";

import useHomeFetches from "../../custom hooks/useHomeFetches";
import Label from "../../shared components/Label";
import Grid from "../../shared components/Grid";
import TrendingMovie from "./TrendingMovie";
const HomePage = () => {
  const fetchedData = useHomeFetches();
  if (fetchedData === {}) return <LoadingSpinner />;
  const { trending, top, upcoming, popular, nowPlaying } = fetchedData;
  return (
    <>
      <Label type="MOVIE" category="TRENDING" />
      <div
        className={
          `${classes["scrollbar"]} ` + "flex overflow-x-scroll gap-4 pb-2 m-4"
        }
      >
        {trending &&
          trending.map((movie) => (
            <TrendingMovie
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </div>
      <Label type="MOVIE" category="POPULAR" />
      <Grid>
        {popular &&
          popular.map((movie) => (
            <Movie
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
      <Label type="MOVIE" category="UPCOMING"></Label>
      <Grid>
        {upcoming &&
          upcoming.map((movie) => (
            <Movie
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
      <Label type="MOVIE" category="NOW PLAYING"></Label>
      <Grid>
        {nowPlaying &&
          nowPlaying.map((movie) => (
            <Movie
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
      <Label type="MOVIE" category="TOP"></Label>
      <Grid>
        {top &&
          top.map((movie) => (
            <Movie
              backdrop={movie.backdrop_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ))}
      </Grid>
    </>
  );
};

export default HomePage;
