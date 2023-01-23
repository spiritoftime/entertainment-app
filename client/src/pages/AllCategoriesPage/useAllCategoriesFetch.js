import { useEffect, useState } from "react";
import customFetch from "../../helper-functions/customFetch";
import { useSearchParams } from "react-router-dom";
// type = movie or tv, substr is the relative url path like in usehomefetches
const useAllCategoriesFetch = (substr) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramsObj = {};
  const [fetchedData, setFetchedData] = useState({});
  const [currPage, setCurrPage] = useState(+searchParams.get("page"));

  const getFilms = async () => {
    const response = await customFetch(`${substr}`, {
      page: currPage,
      with_genres: +searchParams.get("genre"),
    });
    setFetchedData({ films: response });
  };

  useEffect(() => {
    getFilms();
  }, [currPage]);

  return {
    setSearchParams,
    fetchedData,
    searchParams,
    currPage,
    setCurrPage,
  };
};

export default useAllCategoriesFetch;
