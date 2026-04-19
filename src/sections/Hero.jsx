import React from 'react';
import myImage from '../assets/images/images.jpeg';
import Parallax from '../components/Parallax';

const Hero = () => {
  return (
    <section id="hero" className="section-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>Hi, I'm <span className="text-gradient">Kevin</span></h1>
          <p>I am a passionate developer creating awesome, dynamic web applications that push the boundaries of modern design.</p>
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
        </div>
        <div className="hero-image-container">
          <Parallax speed={-0.12}>
            <img src={myImage} alt="Kevin" className="hero-image" />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Hero;
