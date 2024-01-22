import {useState}from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  /* const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({nome: "Ryan", idade: 38})

  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados, faculdade: "Tem faculdade irmão!"})
  }

  return (
  <div>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.faculdade}</p>
    <button onClick={handleClick}>{ativo? "Ativo": "Inativo"}</button>
  </div>
  ) */
  
    const [modal, setModal] = useState(false);

    return (
      <>
        <p>{modal? "Modal Aberto" : "Modal Fechado"}</p>
        <Modal setModal={setModal} modal={modal}/>
        <ButtonModal setModal={setModal}/>
      </>
    )

}
export default App;
