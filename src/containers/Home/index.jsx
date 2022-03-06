import React from 'react';
import Hero from './Hero';
import Works from './Works';

const Home = ({ history, location }) => {
  return (
    <section>
      <Hero />
      <Works />
    </section>
  );
};

export default Home;
