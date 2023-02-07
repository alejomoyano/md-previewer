import { useState } from "react";
import { doFetch } from "../services/Fetch";

export const useFetch = async () => {
  const [response, setResponse] = useState();
  const fetchData = () => {
    doFetch()
      .then((response) => {
        console.log(response);
        setResponse(response);
      })
      .catch((error) => console.error(error));
  };
  return [response, fetchData];
};
