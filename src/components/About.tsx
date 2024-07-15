import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-neutral-light text-neutral-dark py-16">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="container mx-auto text-center px-4"
      >
        <h2 className="text-4xl font-heading font-bold mb-4">About Me</h2>
        <p className="font-body text-lg max-w-2xl mx-auto">
          Hi, I'm Fujun, a passionate photographer based in [Your Location]. I specialize in capturing stunning landscapes, portraits, and special moments. My journey in photography started [X] years ago, and I have been dedicated to creating beautiful and meaningful images ever since.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
