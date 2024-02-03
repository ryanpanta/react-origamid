import {useEffect} from 'react'

function Produto() {

    useEffect(() => {
        function handleScroll(e){
            console.log(e)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    

  return (
    <div style={{height: "200vh"}}>Produto</div>
  )
}

export default Produto