import React from "react";
import useIndividualFetch from "./useIndividualFetch";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared components/LoadingSpinner";
import buildImgUrl from "../../helper-functions/buildImgUrl";
import classes from "./individualpage.module.css";
import Stars from "./Stars";
import Detail from "./Detail";
const IndividualPage = ({ genre }) => {
  const { filmId } = useParams();
  const fetchedData = useIndividualFetch(genre, filmId);
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;
  const { details, casts } = fetchedData;
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {details && (
        <img
          className={classes["width"] + " mx-auto rounded-lg"}
          src={buildImgUrl(details.poster_path)}
        />
      )}
      <div className="text-white flex flex-col gap-4">
        {details && (
          <p className="font-medium text-center">{details.original_title}</p>
        )}
        {details && (
          <p className="font-bold text-gray-500 text-center">
            {details.tagline}
          </p>
        )}
        {details && (
          <p className="text-center font-medium">
            {(details.vote_average / 2).toFixed(1)}
          </p>
        )}
        {details && <Stars vote={Math.floor(details.vote_average / 2)} />}
        {details && (
          <div className="grid grid-cols-2 md:flex  md:justify-between gap-y-4">
            <Detail title="Length" content={details.runtime + " mins"} />
            <Detail
              title="Language"
              contentType="language"
              content={details.original_language}
            />
            <Detail title="Year" content={details.release_date.split("-")[0]} />
            <Detail title="Status" content={details.status} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualPage;
