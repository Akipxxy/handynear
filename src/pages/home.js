import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
  

      <section className="hero">
        <h1>Welcome to HandyNear</h1>
        <p>Find trusted local handymen near you.</p>
      </section>
    </main>
    </>
  );
};

export default Home;
