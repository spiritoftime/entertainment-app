import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";
import { useSearchParams } from "react-router-dom";
// type = movie or tv, substr is the relative url path like in usehomefetches
const useAllFetch = (substr) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [fetchedData, setFetchedData] = useState({});
  const [currPage, setCurrPage] = useState(+searchParams.get("page"));

  const getFilms = async () => {
    const response = await customFetch(`${substr}`, {
      page: currPage,
    });
    setFetchedData({ films: response });
  };

  useEffect(() => {
    getFilms();
  }, [currPage]);

  return {
    setSearchParams,
    fetchedData,

    currPage,
    setCurrPage,
  };
};

export default useAllFetch;
