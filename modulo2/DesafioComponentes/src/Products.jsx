import React from 'react';
import Header from './Header';
import Title from './Title';


const produtos = [
     { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
     { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
]

const Products = () => {

     return (
          <div>
               <Header />
               <Title name="Produtos"/>
               {produtos.map(({nome, propriedades}) => (
                    <div style={{border: "1px solid black", padding: "1rem", marginBottom: "1rem"}} key={nome}>
                         <p>{nome}</p>
                         <ul>
                              {propriedades.map(item => <li key={item}>{item}</li>)}
                         </ul>
                    </div>
               ))}
          </div>
     );
}

export default Products;
