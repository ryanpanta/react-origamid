import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0); //setando count do carrinho começa como zero
  const [mensagem, setMensagem] = React.useState(null); //setando a mensagem/notificacao como null 
  const refMessage = React.useRef(); // starta valor de 'undefined'

  function handleClick() {
    setCarrinho(carrinho + 1); //quando clicado no botão, o count do carrinho vai ser incrementado
    setMensagem('Item adicionado ao carrinho'); //mensagem na tela
    clearTimeout(refMessage.current); //ele vai limpar a última mensagem sempre, na primeira vez, não vai limpar nada, pois o valor é undefined
    refMessage.current = setTimeout(() => { //o atributo refMessage.current vai pegar a referencia atual do timeout, assim, quando for chamado
      setMensagem('');                      // uma outra notificação, vai limpar o último timeout, ou seja, só vai limpar depois de 2s
    }, 2000);                               // do ultimo click/notificaçaõ
  }


  return (
    <>
      <p>{mensagem}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho {carrinho}</button>
    </>
  );
};

export default App;
