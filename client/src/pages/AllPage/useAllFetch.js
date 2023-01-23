import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";
import { useSearchParams } from "react-router-dom";
// type = movie or tv, substr is the relative url path like in usehomefetches
const useAllFetch = (substr) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let defaultPage = 1;
  if (searchParams.get("page")) defaultPage = searchParams.get("page");

  const [fetchedData, setFetchedData] = useState({});
  const [currPage, setCurrPage] = useState(defaultPage);
  console.log(searchParams.get("page"));
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
    setFetchedData,
    currPage,
    setCurrPage,
  };
};

export default useAllFetch;
