import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
