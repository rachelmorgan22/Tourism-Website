import React from 'react';
import tourism from '../assets/tourism.jpg';
import '../styles/Home.css';
import TourCards from './TourCards';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return ( 
  <div>
    <Header />
  <div className="hero">
  <img src={tourism} alt="Landscape" />
  <h3>Discover the Enchantment of Costa Rica!</h3>
  </div>
  <TourCards />
  <Footer />
  </div>
  );
};

export default Home;
