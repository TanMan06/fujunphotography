import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="container mx-auto flex justify-between items-center"
      >
        <div className="text-2xl font-heading">
          {/* <img src="logo-placeholder.png" alt="Logo" className="h-8 inline-block mr-2" /> Fujun Photography */}
          <span className="text-black">Fujun Photography</span>
        </div>
        <nav className="font-body">
          <ul className="flex space-x-8 text-black">
            <li>
              <a href="#portfolio" className="hover:text-secondary transition-colors duration-300">Portfolio</a>
            </li>
            <li>
              <a href="#about" className="hover:text-secondary transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
