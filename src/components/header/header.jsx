import React, { useState, useEffect } from 'react';
import Logo from './logo';
import NavListDrawer from './navListDrawer'; // Importa el componente NavListDrawer
import '../../styles/header/header.css';

function Header() {
  const [menuBackdropStyle, setMenuBackdropStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el valor según tu criterio de pantalla pequeña
    };

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  const handleHover = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    setMenuBackdropStyle({
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
      opacity: 1,
      visibility: 'visible',
    });
  };

  const handleLeave = () => {
    setMenuBackdropStyle({
      opacity: 0,
      visibility: 'hidden',
    });
  };

  return (
    <header className="header" onMouseLeave={handleLeave}>
      <Logo />
      {isMobile ? (
        <NavListDrawer />
      ) : (
        <nav className="nav-menu">
          <ul id="nav-menu" className="nav-link">
            <li><a href="/" onMouseEnter={handleHover}>About Me</a></li>
            <li><a href="/" onMouseEnter={handleHover}>Projects</a></li>
            <li><a href="/" onMouseEnter={handleHover}>Contact</a></li>
          </ul>
        </nav>
      )}
      <div
        id="menu-backdrop"
        className="menu-backdrop"
        style={menuBackdropStyle}
      ></div>
    </header>
  );
}

export default Header;
