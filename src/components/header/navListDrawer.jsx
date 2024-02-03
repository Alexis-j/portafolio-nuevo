import React, { useState, useEffect } from 'react';
import '../../styles/header/navListDrawer.css';

function NavListDrawer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    let timeout;
    if (isMenuOpen) {
      setShowLinks(true);
      let delay = 0;

      // Intervalo de medio segundo (500 milisegundos) para cada enlace
      const links = document.querySelectorAll('.menu.show li');
      links.forEach((link, index) => {
        delay += 150; // Aumenta el retraso para cada enlace
        timeout = setTimeout(() => {
          link.style.opacity = 1;
        }, delay);
      });
    } else {
      setShowLinks(false);
      const links = document.querySelectorAll('.menu.show li');
      links.forEach((link) => {
        link.style.opacity = 0;
      });
    }

    return () => clearTimeout(timeout);
  }, [isMenuOpen]);

  return (
    <div className="nav-list-drawer">
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
      </div>
      {isMenuOpen && (
        <div className="menu-container">
          <ul className={`menu ${showLinks ? 'show' : ''}`}>
            <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/about" className="menu-link">About Me</a></li>
            <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/projects" className="menu-link">Projects</a></li>
            <li style={{ opacity: showLinks ? 0 : 1 }}><a href="/contact" className="menu-link">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavListDrawer;
