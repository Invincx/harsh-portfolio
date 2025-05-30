import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 cursor-pointer hover:border-blue-100 hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;