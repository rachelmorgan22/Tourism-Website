import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Tours from './components/Tours';
import FAQ from './components/FAQ';
import './styles/App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;