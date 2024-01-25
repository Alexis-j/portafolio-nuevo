// Header.jsx

import React from 'react';
import Logo from './logo'; // Importa el componente Logo
import NavListDrawer from './navListDrawer';
import '../../styles/header.css';

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavListDrawer />
    </div>
  );
}

export default Header;
