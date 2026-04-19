import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Expierience from '../sections/Expierience';
import Vision from '../sections/Vision';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Expierience />
      <Vision />
      <Contact />
    </MainLayout>
  );
};

export default Home;
