import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const StorageContext = ({children}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then(res => res.json())
        .then(json => setData(json))
    }, [])

    function clearGlobalContext(){
        setData(null)
    }
    return <GlobalContext.Provider value={{data, clearGlobalContext}}>{children}</GlobalContext.Provider>
}