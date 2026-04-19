import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
