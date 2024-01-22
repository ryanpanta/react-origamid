import React from 'react';

/* const Title = (props) => {
     return (
          <h1 style={{color: props.color}}>
               {props.textContent}
          </h1>
     );
}  */

const Title = ({ color, textContent, children }) => {
  return (
    <h1 style={{ color: color }}>
      {textContent} {children}
    </h1>
  );
};

export default Title;
