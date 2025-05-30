import React from 'react';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-navy-dark text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Last updated: August {currentYear}
            </p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com" 
              className="text-gray-400 hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-400 hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:john.doe@example.com" 
              className="text-gray-400 hover:text-teal transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <button 
            className="bg-teal/20 hover:bg-teal/30 text-teal rounded-full p-3 transition-colors"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;