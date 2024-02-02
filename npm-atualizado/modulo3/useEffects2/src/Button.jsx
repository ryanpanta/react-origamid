/* eslint-disable react/prop-types */

function Button({callback, titulo}) {
  return (
    <button style={{marginRight: "10px"}} onClick={callback}>{titulo}</button>
  )
}

export default Button