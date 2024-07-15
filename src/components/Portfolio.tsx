import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const photos = [
    // Add URLs of your photos here
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <section id="portfolio" className="py-16 bg-white text-gray-800">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="overflow-hidden rounded-lg"
            >
              <img src={photo} alt={`Portfolio ${index}`} className="w-full h-full object-cover"/>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
