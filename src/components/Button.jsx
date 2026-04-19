import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
      {children}
    </button>
  );
};

export default Button;
