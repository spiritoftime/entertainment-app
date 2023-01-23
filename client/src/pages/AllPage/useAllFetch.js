import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";

// type = movie or tv, substr is the relative url path like in usehomefetches
const useAllFetch = (substr) => {
  const [fetchedData, setFetchedData] = useState({});
  const [currPage, setCurrPage] = useState(1);

  const getFilms = async () => {
    const response = await customFetch(`${substr}`, {
      page: currPage,
    });
    setFetchedData({ films: response });
  };

  useEffect(() => {
    getFilms();
  }, [currPage]);

  return { fetchedData, setFetchedData, currPage, setCurrPage };
};

export default useAllFetch;
