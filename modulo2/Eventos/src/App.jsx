import React from 'react';

function App() {

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  function handleClick(event) {
    alert('Você comprou o item ' + event.target.innerText);
  }

  return (
    <div style={{ height: '200vw'}}>
      Div
      <button onClick={({target}) => alert('Você comprou o item ' + target.innerText)}>Camiseta</button>
      <button onClick={({target}) => target.classList.toggle("ativado")}>Calça</button>
    </div>
  );
}
export default App;
