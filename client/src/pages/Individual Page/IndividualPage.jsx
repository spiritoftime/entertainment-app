import React from "react";
import useIndividualFetch from "./useIndividualFetch";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared components/LoadingSpinner";
import buildImgUrl from "../../helper-functions/buildImgUrl";
import classes from "./individualpage.module.css";
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
      <div>
        {details && (
          <p className="text-white font-bold text-center">
            {details.original_title}
          </p>
        )}
      </div>
    </div>
  );
};

export default IndividualPage;
