import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import NewsLetter from '../../components/NewsLetter';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import BreadCrumbs from '../../components/BreadCrumbs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <Hero />
      <About />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
