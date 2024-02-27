import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext';


function ClearGlobalContext() {
    const {clearGlobalContext} = useContext(GlobalContext)
  return (
    <button onClick={clearGlobalContext}>Clear</button>
  )
}

export default ClearGlobalContext