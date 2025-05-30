import React, { useState, useEffect } from 'react';
import { skillsData } from '../data/skills';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';
import { 
  Cpu, Code, CircuitBoard, Bot, Brain, 
  Wrench, Cog, Laptop, Terminal, Database, 
  Zap, Box, Printer, Ruler, Settings
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  useAnimationObserver();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const getIconForCategory = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'mechatronics':
        return <Cpu size={24} className="text-blue-600" />;
      case 'robotics':
        return <Bot size={24} className="text-blue-600" />;
      case 'programming':
        return <Code size={24} className="text-blue-600" />;
      case 'circuit design':
        return <CircuitBoard size={24} className="text-blue-600" />;
      case 'cad/cam and mechanical design':
        return <Brain size={24} className="text-blue-600" />;
      default:
        return <Cpu size={24} className="text-blue-600" />;
    }
  };

  const getIconForSkill = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('mechanical') || name.includes('prototyping')) return <Wrench size={20} />;
    if (name.includes('sensor')) return <Settings size={20} />;
    if (name.includes('arduino')) return <Cpu size={20} />;
    if (name.includes('python')) return <Code size={20} />;
    if (name.includes('matlab')) return <Laptop size={20} />;
    if (name.includes('raspberry pi') || name.includes('jetson')) return <Terminal size={20} />;
    if (name.includes('pcb')) return <CircuitBoard size={20} />;
    if (name.includes('soldering')) return <Zap size={20} />;
    if (name.includes('circuit')) return <CircuitBoard size={20} />;
    if (name.includes('fusion') || name.includes('catia') || name.includes('solidworks')) return <Box size={20} />;
    if (name.includes('3d printing')) return <Printer size={20} />;
    if (name.includes('design')) return <Ruler size={20} />;
    if (name.includes('industrial')) return <Cog size={20} />;
    return <Settings size={20} />;
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600 blur-[100px] floating"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-blue-600 blur-[80px] floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16 fade-in-bottom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {skillsData.map((category, index) => (
            <div 
              key={category.name} 
              className="fade-in-bottom group bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-full mr-4 group-hover:rotate-12 transition-transform">
                  {getIconForCategory(category.name)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-center space-x-3 group">
                    <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {getIconForSkill(skill.name)}
                    </div>
                    <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;