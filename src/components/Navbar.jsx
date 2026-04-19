import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div className="logo"><strong>Portfolio</strong></div>
      <ul className="nav-links" style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
