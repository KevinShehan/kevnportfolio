import React from 'react';

const TimelineCard = ({ title, date, description }) => {
  return (
    <div className="timeline-card" style={{ borderLeft: '2px solid #333', paddingLeft: '1rem', marginBottom: '1rem' }}>
      <h4>{title}</h4>
      <span style={{ fontSize: '0.8rem', color: '#666' }}>{date}</span>
      <p>{description}</p>
    </div>
  );
};

export default TimelineCard;
