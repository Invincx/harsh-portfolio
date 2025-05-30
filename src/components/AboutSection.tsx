import React from 'react';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';
import { Bot, Brain, Microscope, Code, Award, Rocket, Cpu, CircuitBoard } from 'lucide-react';

const AboutSection: React.FC = () => {
  useAnimationObserver();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600 blur-[100px] floating"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-blue-600 blur-[80px] floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 fade-in-bottom" style={{ transitionDelay: '100ms' }}>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed">
                I am a passionate <span className="text-blue-600 font-semibold">Mechatronics and Robotics Engineer</span> with a strong foundation in electronics, mechanical design, and control systems. Currently pursuing my Master of Science at New York University, I bring hands-on experience in developing advanced mechatronic systems, embedded electronics, and autonomous robotic solutions.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed">
                With expertise in <span className="text-blue-600 font-semibold">designing precision-driven robotic systems</span>, sensor integration, and PCB design, I thrive at the intersection of innovation and problem-solving. My experience includes creating custom IoT-enabled manufacturing solutions, developing autonomous navigation algorithms, and designing mechanical systems for multi-terrain robots.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed">
                I've worked across industry and academia, contributing to projects that enhance manufacturing efficiency, rehabilitation robotics, and real-time localization. I am driven to create solutions that bridge theoretical knowledge and practical engineering, ensuring scalable designs with real-world applications.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 fade-in-bottom hover:scale-105" style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Bot size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Robotics Systems</h3>
              <p className="text-gray-600">Designing and implementing full-stack robotics solutions from hardware to software.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 fade-in-bottom hover:scale-105" style={{ transitionDelay: '300ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Brain size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Control Systems</h3>
              <p className="text-gray-600">Developing advanced control algorithms for autonomous systems and robotics.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 fade-in-bottom hover:scale-105" style={{ transitionDelay: '400ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Microscope size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Research</h3>
              <p className="text-gray-600">Conducting research in mechatronics, robotics, and manufacturing systems.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 fade-in-bottom hover:scale-105" style={{ transitionDelay: '500ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                <Code size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Embedded Systems</h3>
              <p className="text-gray-600">Building robust embedded solutions for IoT and automation applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;