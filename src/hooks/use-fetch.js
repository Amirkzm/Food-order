import { useCallback, useState } from "react";

const useFetch = (comp) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const sendRequest = useCallback(
    async (url, configRequest = null) => {
      console.log("start sending request to server for:", comp);
      console.log(configRequest);
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method: configRequest !== null ? configRequest.method : "GET",
          headers: configRequest !== null ? configRequest.headers : {},
          body:
            configRequest !== null ? JSON.stringify(configRequest.body) : null,
        });

        if (!response.ok) {
          setError(true);
          throw new Error("Request failed!");
        }

        const data = await response.json();
        console.log("data:", data);
        setData(data);
      } catch (error) {
        setError(true);
        console.log("error happened");
      } finally {
        setIsLoading(false);
      }
    },
    [comp]
  );

  return { isLoading, error, data, sendRequest };
};

export default useFetch;
