import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);

  function incrementOne() {
    setCount(count + 1);
  }
  return (
    <GlobalContext.Provider value={{ count, incrementOne }}>
      {children}
    </GlobalContext.Provider>
  );
};
