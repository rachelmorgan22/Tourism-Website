import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Tours from './components/Tours';
import FAQ from './components/FAQ';
import './styles/App.css';

const App = () => {
  return (
    <div>
    <Home />
    </div>

    
    <Router basename="/Tourism-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
