import React from 'react';
import Title from './Title';
import Form from './Form/Form';
import Header from './Header';

function App() {
    const logado = true;
    const nome = "Ryan";
    return (
      <>
        <Title textContent="Jussara e Cristal" color="pink">
          Isso é o children
          <p>TESTEZADA</p>
        </Title>
        <Header logado={logado} nome={nome}/>
        <Form/>
      </>
    )
}
export default App;
