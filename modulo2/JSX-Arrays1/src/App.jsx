import React from 'react';

function App() {

  const books = [
    { name: 'A Game of Thrones', year: 1996 },
    { name: 'A Clash of Kings', year: 1998 },
    { name: 'A Storm of Swords', year: 2000 },
  ];

  return (
      <div>
        <ul>
        {books.filter(({year}) => year >= 1998).map(({name, year}) => <li key={name}>{name}, {year}</li>)}
        </ul>
      </div>
  );
}
export default App;
