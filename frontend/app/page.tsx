'use client';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import GallerySection from '../components/sections/GallerySection';
import Contact from '../components/sections/Contact';
import RunningArrow from '../components/RunningArrow';
import SpaceBackground from '../components/SpaceBackground';

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <RunningArrow />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <Hero />
        <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <GallerySection />
      <Contact />
      </motion.main>
    </>
  );
}
