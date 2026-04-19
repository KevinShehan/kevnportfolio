import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="glass styled-card">
      <h3 className="text-gradient">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
