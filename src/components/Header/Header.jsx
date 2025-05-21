import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/image/logo-bookmark.svg';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <img src={logo} alt="BOOKMARK" className="header-logo" />

      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a
              href="#features"
              className={activeLink === 'features' ? 'active' : ''}
              onClick={() => handleLinkClick('features')}
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={activeLink === 'pricing' ? 'active' : ''}
              onClick={() => handleLinkClick('pricing')}
            >
              PRICING
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
            >
              CONTACT
            </a>
          </li>
          <li>
            <button className="login-btn">LOGIN</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
