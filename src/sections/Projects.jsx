import React from 'react';
import Card from '../components/Card';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading text-gradient">Projects</h2>
      <div className="grid-cards">
        <Card title="E-commerce Platform" description="A modern, high-performance online store with aesthetic product showcases." />
        <Card title="Social Dashboard" description="A highly interactive analytics dashboard featuring real-time data and micro-animations." />
        <Card title="Portfolio Hub" description="A premium personal portfolio with glassmorphism and stunning visual effects." />
      </div>
    </section>
  );
};

export default Projects;
