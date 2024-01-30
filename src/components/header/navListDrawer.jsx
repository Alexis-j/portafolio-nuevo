// NavListDrawer.jsx
import React, { useState } from 'react';
import '../../styles/navListDrawer.css';

function NavListDrawer() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar mobile-navbar ${isMenuOpen ? 'show' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className="menu">
        <li><a href="/about" className="menu-link">About Me</a></li>
        <li><a href="/contact" className="menu-link">Projects</a></li>
        <li><a href="/contact" className="menu-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavListDrawer;
