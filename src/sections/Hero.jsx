import React from 'react';
import myImage from '../assets/images/images.jpeg';
import Parallax from '../components/Parallax';
import useTypewriter from '../hooks/useTypewriter';

const roles = [
  'Software Developer',
  'Freelancer',
  'UI/UX Designer',
  'Full Stack Engineer',
  'Creative Thinker'
];

const Hero = () => {
  const typedText = useTypewriter(roles, 90, 50, 1800);

  return (
    <section id="hero" className="section-container hero-section">
      {/* Night Sky Particles */}
      <div className="night-sky" aria-hidden="true">
        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
        <div className="star star-4" />
        <div className="star star-5" />
        <div className="star star-6" />
        <div className="star star-7" />
        <div className="star star-8" />
        <div className="star star-9" />
        <div className="star star-10" />
        <div className="star star-11" />
        <div className="star star-12" />
        <div className="star star-13" />
        <div className="star star-14" />
        <div className="star star-15" />
        <div className="star star-16" />
        <div className="star star-17" />
        <div className="star star-18" />
        <div className="star star-19" />
        <div className="star star-20" />
      </div>

      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="text-gradient">Kevin</span>
            <span className="wave-emoji" role="img" aria-label="wave">👋</span>
          </h1>
          <div className="typewriter-line">
            <span className="typewriter-prefix">I'm a </span>
            <span className="typewriter-text">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>
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
