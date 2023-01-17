import React from "react";
import { useParams } from "react-router-dom";
import useAllFetch from "./useAllFetch";
const AllPage = ({}) => {
  const params = useParams();
  console.log(params);
  const { filmType, category, duration = "" } = params;
  const { fetchedData, setFetchedData } = useAllFetch(
    `${filmType}/${category}`
  ); // fetches the first page

  return <div>HELLO WORLD</div>;
};

export default AllPage;
