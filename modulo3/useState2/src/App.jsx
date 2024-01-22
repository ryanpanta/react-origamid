import { useState } from 'react';

function App() {
  const [contar, setContar] = useState(1);
  const [itens, setItens] = useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItens([...itens, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
}
export default App;
