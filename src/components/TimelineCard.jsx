import React from 'react';

const TimelineCard = ({ title, date, description }) => {
  return (
    <div className="timeline-item">
      <div className="glass styled-card" style={{ padding: '1.5rem' }}>
        <h4 className="text-gradient">{title}</h4>
        <span>{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
