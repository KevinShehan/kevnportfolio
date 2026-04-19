import React from 'react';
import MainLayout from '../layouts/MainLayout';
import FadeInSection from '../components/FadeInSection';
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
      <FadeInSection delay={0}>
        <Hero />
      </FadeInSection>
      <FadeInSection delay={100}>
        <About />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Journey />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Skills />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Projects />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Expierience />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Vision />
      </FadeInSection>
      <FadeInSection delay={100}>
        <Contact />
      </FadeInSection>
    </MainLayout>
  );
};

export default Home;
