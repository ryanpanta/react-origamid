import React, { useEffect, useState } from "react";

function useLocalStorage(key, start) {
  const [state, setState] = useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : start;
  });

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])
  return [state, setState];
}

export default useLocalStorage;
