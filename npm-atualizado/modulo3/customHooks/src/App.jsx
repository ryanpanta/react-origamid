import useLocalStorage from "./useLocalStorage";

const App = () => {
 
    const [pref, setPref] = useLocalStorage('preferencia', '')

    function handleClick({target}){
      setPref(target.innerText)
    }
  return (
    <>
      <h1>Preferência: {pref}</h1>
      <button onClick={handleClick} style={{marginRight: "10px"}}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  );
};

export default App;
