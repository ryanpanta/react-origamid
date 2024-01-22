import React from 'react';

const Button = ({title, action}) => {
     return (
          <button onClick={action} style={{margin: "10px"}}>
               {title}
          </button>
     );
}

export default Button;
