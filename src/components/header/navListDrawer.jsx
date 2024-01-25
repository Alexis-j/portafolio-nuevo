// Navbar.jsx
import React, { useState } from 'react';
import '../../styles/navListDrawer.css';

const NavListDawer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="/about" className="menu-link">About Me</a></li>
        <li><a href="/contact" className="menu-link">Projects</a></li>
        <li><a href="/contact" className="menu-link">contact</a></li>
      </ul>
    </nav>
  );
}

export default NavListDawer;
