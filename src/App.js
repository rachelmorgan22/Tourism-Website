import React from 'react';
import { BrowserRouter basename="/Tourism-Website" as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Tours from './components/Tours';
import FAQ from './components/FAQ';
import './styles/App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
