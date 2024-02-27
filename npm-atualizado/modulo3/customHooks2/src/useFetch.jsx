import React, { useCallback } from "react";
import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const set = new Set();

  const request = useCallback(async (url, options) => {
    let json;
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      json = null;
      setError("Erro");
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  }, []);

  set.add(request);
  console.log(set);

  return { data, error, loading, request };
}

export default useFetch;
