import React from "react";
import useIndividualFetch from "./useIndividualFetch";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../shared components/LoadingSpinner";

const IndividualPage = ({ genre }) => {
  const { filmId } = useParams();
  const fetchedData = useIndividualFetch(genre, filmId);
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;
  return <div>Hello!</div>;
};

export default IndividualPage;
