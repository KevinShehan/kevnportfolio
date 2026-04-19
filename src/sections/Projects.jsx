import React from 'react';
import Card from '../components/Card';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 2rem' }}>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <Card title="Project 1" description="A cool project I built." />
        <Card title="Project 2" description="Another awesome project." />
      </div>
    </section>
  );
};

export default Projects;
