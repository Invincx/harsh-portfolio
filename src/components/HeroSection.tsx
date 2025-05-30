import React from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  useAnimationObserver();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600 blur-[100px] floating"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-blue-600 blur-[80px] floating" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          <div className="md:w-3/5 mb-10 md:mb-0 space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 font-mono mb-3 fade-in-bottom text-lg tracking-wider animate-pulse">MS in Mechatronics and Robotics</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 fade-in-bottom leading-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600" style={{ transitionDelay: '100ms' }}>
                Harshavardhan Vibhandik
              </h1>
              <div className="flex flex-wrap gap-2 mb-6 fade-in-bottom" style={{ transitionDelay: '200ms' }}>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">Robotics</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">Mobile Robotics</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">Bio-Medical Devices</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">Rehabilitation</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">Circuit Design</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">PCB Fabrication</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">IoT</span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">Drones</span>
              </div>
            </div>
            
            <p className="mb-8 text-gray-300 max-w-xl fade-in-bottom text-lg leading-relaxed border-l-4 border-blue-600 pl-4 italic" style={{ transitionDelay: '300ms' }}>
              "I design and build innovative robotic systems that bridge the gap between concept and reality. My passion lies in creating scalable solutions that integrate mechanical design, embedded systems, and automation to solve real-world engineering challenges."
            </p>
            
            <div className="flex flex-wrap gap-4 fade-in-bottom" style={{ transitionDelay: '400ms' }}>
              <a 
                href="#projects" 
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md flex items-center transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/20"
              >
                <span className="group-hover:translate-x-1 transition-transform">View Projects</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="/Harshavardhan Vibhandik.pdf" 
                className="group border-2 border-blue-600 text-blue-400 font-bold py-3 px-6 rounded-md flex items-center transition-all transform hover:scale-105 hover:bg-blue-600 hover:text-white"
                download="Harshavardhan Vibhandik Resume"
              >
                <Download size={18} className="mr-2 group-hover:animate-bounce" /> Resume
              </a>
            </div>

            <div className="mt-10 flex space-x-6 fade-in-bottom" style={{ transitionDelay: '500ms' }}>
              <a 
                href="https://github.com" 
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:rotate-12" 
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover:rotate-12" 
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center fade-in-bottom" style={{ transitionDelay: '300ms' }}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600/30 transform hover:scale-105 transition-transform duration-300 floating">
              <img 
                src="/hsv.jpg" 
                alt="Harshavardhan Vibhandik - Robotics Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;