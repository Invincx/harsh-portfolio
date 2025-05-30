import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            <span className="text-slate-900">Harshavardhan Vibhandik</span>
            <span className="text-teal-600 ml-2">Robotics</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8"
          >
            Robotics Engineer | AI Enthusiast | Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 