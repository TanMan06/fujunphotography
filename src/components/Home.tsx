import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from './PhotoGallery';
import Footer from './Footer';
import photo from "../photos/20230705113344_IMG_5220.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center px-4"
        >
          <h1 className="text-5xl font-heading font-bold mb-4">Welcome to Fujun Photography</h1>
          <p className="font-body text-xl mb-8">Capturing moments, one shot at a time.</p>
          <a href="#portfolio" className="bg-secondary text-white py-2 px-4 rounded hover:bg-accent transition-colors duration-300">
            View Portfolio
          </a>
        </motion.div>
      </section>

      {/* Horizontal Photo Scrolling Section */}
      <section className="w-screen">
        <div className="w-screen">
          <PhotoGallery />
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Home;
