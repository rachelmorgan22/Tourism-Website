import React from 'react';
import tourism from '../assets/tourism.jpg';
import '../styles/Home.css';
import TourCards from './TourCards';

const Home = () => {
  return ( 
  <div>
  <div className="hero">
  <img src={tourism} alt="Landscape" />
  <h3>Discover the Enchantment of Costa Rica!</h3>
  </div>
  <TourCards />
  </div>
  );
};

export default Home;