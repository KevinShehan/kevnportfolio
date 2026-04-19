import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ textAlign: 'center', padding: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
