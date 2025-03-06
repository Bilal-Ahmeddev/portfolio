import React from 'react';
import Skills from '../Components/Skills';
import Intro from '../Components/Intro';
import Experience from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";

const Sections = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Intro />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ProjectsPage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotateY: 180 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Experience />
      </motion.div>
    </>
  );
};

export default Sections;