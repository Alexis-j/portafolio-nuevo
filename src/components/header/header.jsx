// Header.jsx
import React, { useState } from 'react';
import Logo from './logo'; // Importa el componente Logo
import '../../styles/header.css';

function Header() {
  const [menuBackdropStyle, setMenuBackdropStyle] = useState({});

  const handleHover = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    setMenuBackdropStyle({
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
      opacity: 1, // Comienza con opacidad 0
      visibility: 'visible',
    });
  };



const handleLeave = (e) => {
  setMenuBackdropStyle({
    opacity: 0,
    visibility: 'hidden', // Mantén la visibilidad mientras se aplica la transición
  });
};

  return (
    <header className="header" onMouseLeave={handleLeave}>
      <Logo />
      <nav className="nav-menu" >
        <ul id="nav-menu" className="nav-link">
          <li><a href="/" onMouseEnter={handleHover} >About Me</a></li>
          <li><a href="/" onMouseEnter={handleHover} >Projects</a></li>
          <li><a href="/" onMouseEnter={handleHover} >Contact</a></li>
        </ul>
      </nav>

      <div
        id="menu-backdrop"
        className='menu-backdrop'
        style={menuBackdropStyle}
      ></div>
    </header>
  );
}

export default Header;
