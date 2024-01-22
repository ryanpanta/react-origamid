import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const active = {
  color: "green",
}

const inative = {
  color: "red",
}

function App(){
  const dados = mario;
  const sumTotal = dados.compras.map(item => +item.preco.replace("R$ ", "")).reduce((acc, item) => acc + item)
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={dados.ativa? active : inative}>{dados.ativa ? "Ativa": "Inativa"}</span></p>
      <p>Total gasto: {`R$ ${sumTotal}`}</p>
      {sumTotal > 8000 && <p>Eita, tá gastando muito, se controlakkkk</p>}
    </>
  )  
}
export default App;
