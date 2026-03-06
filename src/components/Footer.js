import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">Indian Forts</h3>
                    <p className="footer-text">
                        Discover the magnificent forts of India, each telling a unique story of our rich heritage and architectural brilliance.
                    </p>
                    <div className="footer-social">
                        <a href="#" className="social-icon">📘</a>
                        <a href="#" className="social-icon">📷</a>
                        <a href="#" className="social-icon">🐦</a>
                        <a href="#" className="social-icon">📌</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Popular Forts</h4>
                    <ul className="footer-links">
                        <li><a href="#">Red Fort, Delhi</a></li>
                        <li><a href="#">Amer Fort, Jaipur</a></li>
                        <li><a href="#">Mehrangarh Fort</a></li>
                        <li><a href="#">Gwalior Fort</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Newsletter</h4>
                    <p className="footer-text">Subscribe to get updates about new forts and historical insights.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email" className="newsletter-input" />
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Indian Forts. All rights reserved. | Designed with ❤️ for heritage lovers</p>
            </div>
        </footer>
    );
};

export default Footer;