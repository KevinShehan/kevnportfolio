import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Journey = () => {
  return (
    <section id="journey" className="section-container">
      <h2 className="section-heading text-gradient">My Journey</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TimelineCard title="Started Coding" date="2020" description="Dived into the world of web development, learning HTML, CSS, and JS fundamentals." />
        <TimelineCard title="First Job" date="2022" description="Joined a dynamic team to build rich user interfaces and scale applications." />
        <TimelineCard title="Present Day" date="2026" description="Creating highly aesthetic, premium experiences using modern tools and frameworks." />
      </div>
    </section>
  );
};

export default Journey;
