import React from 'react';
import ProfilePic from '../../assets/img/hero.png';
import '../../styles/hero/hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="photo-container">
        <img className="hero-photo" src={ProfilePic} alt="logo_cv" loading='lazy' />
      </div>
      <div className="saludo">
      <h1>Hi, I am <br/>
      <strong>Alexis Jimenez C</strong></h1>
      <h2>Frontend Developer</h2>
      </div>
    </section>
  );
}

export default Hero;
