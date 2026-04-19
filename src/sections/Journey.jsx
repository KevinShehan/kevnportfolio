import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Journey = () => {
  return (
    <section id="journey" style={{ padding: '4rem 2rem' }}>
      <h2>My Journey</h2>
      <TimelineCard title="Started Coding" date="2020" description="Learned HTML, CSS, JS." />
      <TimelineCard title="First Job" date="2022" description="Joined an awesome company as a Junior Developer." />
    </section>
  );
};

export default Journey;
