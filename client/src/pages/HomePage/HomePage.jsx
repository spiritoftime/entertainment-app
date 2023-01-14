import Film from "./Film";
import classes from "./homepage.module.css";

import Navbar from "../../shared components/Navbar";
import LoadingSpinner from "../../shared components/LoadingSpinner";

import useHomeFetches from "../../custom hooks/useHomeFetches";
import Label from "../../shared components/Label";
import Grid from "../../shared components/Grid";
import TrendingMovie from "./TrendingMovie";
const HomePage = () => {
  const fetchedData = useHomeFetches();
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;
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
              relativePath={`/trending/${movie.id}`}
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
            <Film
              relativePath={`/popular/${movie.id}`}
              filmType="Movie"
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
            <Film
              relativePath={`/upcoming/${movie.id}`}
              filmType="Movie"
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
            <Film
              relativePath={`/nowPlaying/${movie.id}`}
              filmType="Movie"
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
            <Film
              relativePath={`/top/${movie.id}`}
              filmType="TV"
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
