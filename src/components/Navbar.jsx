import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="glass-nav navbar">
      <div className="logo"><span className="text-gradient">Portfolio</span></div>
      
      <div className="nav-actions">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* The Theme Toggle switch included inside the actions area */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
