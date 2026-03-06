import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-text">Indian Forts</span>
                    <span className="logo-icon">🏰</span>
                </Link>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;