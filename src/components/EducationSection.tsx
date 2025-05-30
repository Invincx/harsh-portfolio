import React from 'react';
import { educationData, experienceData } from '../data/education';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

const EducationSection: React.FC = () => {
  useAnimationObserver();
  
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <h2 className="text-center text-gray-900 font-bold mb-12 fade-in-bottom">Education & Experience</h2>
        
        <div className="mb-16">
          <div className="flex items-center mb-8 fade-in-bottom">
            <div className="bg-blue-600/10 p-3 rounded-full mr-4">
              <GraduationCap size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.degree} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow fade-in-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <Calendar size={18} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-lg text-gray-700 mb-3">{edu.university}, {edu.location}</p>
                
                {edu.gpa && (
                  <div className="flex items-center mb-4">
                    <Award size={18} className="text-blue-600 mr-2" />
                    <p className="text-sm text-blue-600 font-medium">GPA: {edu.gpa}</p>
                  </div>
                )}
                
                <p className="mb-6 text-gray-600">{edu.description}</p>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Key Courses:</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {edu.courses.map(course => (
                      <li key={course} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-8 fade-in-bottom">
            <div className="bg-blue-600/10 p-3 rounded-full mr-4">
              <Briefcase size={24} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.title}`}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow fade-in-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-lg text-gray-700">{exp.company}, {exp.location}</p>
                  </div>
                  
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar size={18} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-600">{exp.description}</p>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-3">
                    {exp.achievements.map(achievement => (
                      <li key={achievement} className="text-sm text-gray-600 pl-4 relative">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;