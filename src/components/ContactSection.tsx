import React from 'react';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  useAnimationObserver();
  
  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container mx-auto container-padding">
        <h2 className="text-center text-white font-bold mb-12 fade-in-bottom">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="fade-in-bottom">
            <p className="text-gray-200 mb-8 text-center">
              I'm currently open to new opportunities in robotics research and development. 
              Feel free to reach out if you'd like to discuss potential collaborations, 
              have questions about my work, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <a href="mailto:hsv2015@nyu.edu" className="text-gray-300 hover:text-blue-400 transition-colors">
                    hsv2015@nyu.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <a href="tel:+15166429551" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +1 (516) 642-9551
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-300">
                    New York
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                  <Linkedin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/harshavardhan-vibhandik-6ab298189" className="text-gray-300 hover:text-blue-400 transition-colors">
                    linkedin.com/in/harshavardhan-vibhandik-6ab298189
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;