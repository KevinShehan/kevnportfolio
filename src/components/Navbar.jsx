import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass-nav navbar">
      <div className="logo"><span className="text-gradient">Portfolio</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
