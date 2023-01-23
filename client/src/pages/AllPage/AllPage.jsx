import React from "react";
import { useParams } from "react-router-dom";
import useAllFetch from "./useAllFetch";
import Grid from "../../shared components/Grid";
import AllFilm from "./AllFilm";
import LoadingSpinner from "../../shared components/LoadingSpinner";
import Pagination from "./Pagination";

const AllPage = ({ type = "" }) => {
  const params = useParams();

  const { filmType, category, duration = "" } = params;
  let substr = "";
  let paramsObj = {};
  if (params.length === 0) substr = `${filmType}/${category}`;
  else {
    substr = `discover/${type}`;
  }
  if (category === "trending") substr = `${category}/${filmType}/week`;

  const { fetchedData, setSearchParams, currPage, setCurrPage, searchParams } =
    useAllFetch(substr); // fetches the first page
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;

  return (
    <div className="">
      <Grid>
        {fetchedData.films.results.map((movie, idx) =>
          type !== "tv" ? (
            <AllFilm
              num={idx}
              relativePath={`/now_playing/${movie.id}`}
              filmType={type}
              backdrop={movie.backdrop_path}
              poster_path={movie.poster_path}
              key={movie.id}
              id={movie.id}
              date={movie.release_date}
              title={movie.title}
            />
          ) : (
            <AllFilm
              num={idx}
              relativePath={`/now_playing/${movie.id}`}
              filmType={type}
              backdrop={movie.backdrop_path}
              poster_path={movie.poster_path}
              key={movie.id}
              id={movie.id}
              date={movie.first_air_date}
              title={movie.name}
            />
          )
        )}
      </Grid>
      <Pagination
        searchParams={searchParams}
        currPage={currPage}
        setCurrPage={setCurrPage}
        setSearchParams={setSearchParams}
        totalPage={fetchedData.films.total_pages}
      />
    </div>
  );
};

export default AllPage;
