// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from 'react';
import Button from './Button';
import Content from './Content';

function App() {

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(e){
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`)
    const json = await response.json()
    setDados(json);
    setLoading(false);
  }
 
  return (
    <>
      <Button title="notebook" action={handleClick}/>    
      <Button title="smartphone" action={handleClick}/>    
      <Button title="tablet" action={handleClick}/>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Content dados={dados} />}
    </>
  );
}
export default App;
