import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";

// type = movie or tv, substr is the relative url path like in usehomefetches
const useAllFetch = (substr) => {
  const [fetchedData, setFetchedData] = useState({});

  const getFilms = async () => {
    const response = await customFetch(`${substr}`, {
      page: 1,
    });
    setFetchedData({ films: response });
  };

  useEffect(() => {
    getFilms();
  }, []);

  return { fetchedData, setFetchedData };
};

export default useAllFetch;
