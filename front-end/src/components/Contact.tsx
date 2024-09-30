import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-800">
      <motion.div 
        initial={{ y: '100vh' }} 
        animate={{ y: 0 }} 
        transition={{ type: 'spring', stiffness: 120 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name"/>
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email"/>
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message"></textarea>
          </div>
          <button className="bg-gray-800 text-white p-2 rounded" type="submit">Send</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
