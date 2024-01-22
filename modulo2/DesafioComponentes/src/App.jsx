import React from 'react';
import Home from './Home';
import Products from './Products';
import Header from './Header';

function App() {
  
  const { pathname } = window.location;

  let Component = Home;

  if(pathname === '/produtos')
    Component = Products;

  return (
    <>
      <Component />
    </>
  )
}
export default App;
