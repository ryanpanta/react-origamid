import React from 'react';

function App() {
  function showName(lastname) {
    return 'Ryan ' + lastname;
  }

  const active = true;
  const title = <h1>React PogChamp (Test)</h1>;

  const car = {
    marca: 'ford',
    rodas: 4,
    combustivel: 'flex',
  };

  const styleP = {
    color: 'blue',
    padding: '2rem',
  }

  return (
    <>
      {title}
      <p>{showName('Rodrigues') + ' Test'}</p>
      <p>{new Date().getFullYear()}</p>
      <p>{car.rodas}</p>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <p className={active ? 'active' : 'inative'} style={styleP}>Teste</p>
    </>
  );
}

export default App;
