import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';

const ProjectsSection: React.FC = () => {
  useAnimationObserver();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  
  const handleOpenProject = (index: number) => {
    setSelectedProjectIndex(index);
  };
  
  const handleCloseProject = () => {
    setSelectedProjectIndex(null);
  };
  
  const handleNextProject = () => {
    setSelectedProjectIndex(prev => 
      prev === null ? 0 : (prev + 1) % projectsData.length
    );
  };
  
  const handlePrevProject = () => {
    setSelectedProjectIndex(prev => 
      prev === null ? 0 : (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  // Sort projects: those with images first, then those without
  const sortedProjects = [...projectsData].sort((a, b) => {
    const aHasImages = a.images && a.images.length > 0;
    const bHasImages = b.images && b.images.length > 0;
    if (aHasImages && !bHasImages) return -1;
    if (!aHasImages && bHasImages) return 1;
    return 0;
  });

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <h2 className="text-center text-gray-900 font-bold mb-12 fade-in-bottom">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sortedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="fade-in-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard 
                project={project}
                onClick={() => handleOpenProject(projectsData.indexOf(project))}
              />
            </div>
          ))}
        </div>
        
        {selectedProjectIndex !== null && (
          <ProjectModal 
            project={projectsData[selectedProjectIndex]}
            isOpen={selectedProjectIndex !== null}
            onClose={handleCloseProject}
            onNext={handleNextProject}
            onPrev={handlePrevProject}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;