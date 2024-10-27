import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">Boundless Horizons</div>
            <nav className={`nav ${isOpen ? `open` : ''}`}>
                <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/tours" onClick={handleLinkClick}>Tours</Link></li>
                    <li><Link to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
        </header>
    );
};

export default Header;