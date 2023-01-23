import React from "react";
import { useParams } from "react-router-dom";
import useAllFetch from "./useAllFetch";
import Grid from "../../shared components/Grid";
import AllFilm from "./AllFilm";
import LoadingSpinner from "../../shared components/LoadingSpinner";
import Pagination from "./Pagination";

const AllPage = ({}) => {
  const params = useParams();
  console.log(params);
  const { filmType, category, duration = "" } = params;
  const { fetchedData, setFetchedData, currPage, setCurrPage } = useAllFetch(
    `${filmType}/${category}`
  ); // fetches the first page
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;

  return (
    <div className="">
      <Grid>
        {fetchedData.films.results.map((movie, idx) => (
          <AllFilm
            num={idx}
            relativePath={`/now_playing/${movie.id}`}
            filmType="Movie"
            backdrop={movie.backdrop_path}
            key={movie.id}
            id={movie.id}
            date={movie.release_date}
            title={movie.title}
          />
        ))}
      </Grid>
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        setFetchedData={setFetchedData}
        totalPage={fetchedData.films.total_pages}
      />
    </div>
  );
};

export default AllPage;
