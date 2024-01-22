import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
     return (
          <form>
               <p>
                    <label htmlFor="nome">Nome:</label>
                    <Input texto="text" />
               </p>
               <p>
                    <label htmlFor="mail">Email:</label>
                    <Input texto="email"/>
               </p>
               <Button />
          </form>
     );
}

export default Form;
