import React from 'react';
import Header from './Header';
import Title from './Title';

const Home = () => {
     return (
          <section>
               <Header />
               <Title name="Home"/>
               <p>Essa é a home do site</p>
          </section>
     );
}

export default Home;
