import React from 'react';

const Header = ({logado, nome}) => { 
     if(logado)
          return <header>Bem vindo, {nome}</header>
     return <header>Tyrolip Basics</header>
}

export default Header;
