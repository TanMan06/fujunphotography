import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-black py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-lg font-bold">Fujun Photography</div>
        <nav className="space-x-2">
          <a href="/" className="text-black hover:text-gray-700 transition duration-300">Portfolio</a>
          <a href="/about" className="text-black hover:text-gray-700 transition duration-300">About</a>
          <a href="/contact" className="text-black hover:text-gray-700 transition duration-300">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
