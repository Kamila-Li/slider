import React from 'react';
import './Footer.css'; // Подключаем CSS файл
import logo from '../../assets/image/logo-bookmark.footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <p className="footer-counter">35.000+ ALREADY JOINED</p>
          <h2 className="footer-title">Stay up-to-date with what we're doing</h2>
          <form className="footer-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="footer-input"
              required
            />
            <button type="submit" className="footer-button">Contact Us</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-nav">
          <div className="footer-links">
                <img src={logo} alt="BOOKMARK" className="footer-links" />
        
            <a href="/features" className="footer-link">FEATURES</a>
            <a href="/pricing" className="footer-link">PRICING</a>
            <a href="/contact" className="footer-link">CONTACT</a>
          </div>
          
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/image/icon-facebook.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/image/icon-twitter.svg" alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;