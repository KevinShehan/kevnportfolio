import React from 'react';


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-styled glass">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-left">
          <p>Designed & Developed by <span>Kevin Shehan</span></p>
        </div>

        {/* Center */}
        <div className="footer-center">
          <p>&copy; {new Date().getFullYear()} Kevin</p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaGithub /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

