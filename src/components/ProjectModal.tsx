import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, Film } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose,
  onNext,
  onPrev 
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-gray-100 text-gray-800 transition-colors duration-300 z-10 shadow-lg hover:shadow-xl"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Gallery */}
          <div className="relative bg-gray-100">
            <div className="relative h-[400px] lg:h-full overflow-hidden">
              <img
                src={project.images[activeImageIndex]}
                alt={`${project.title} - Image ${activeImageIndex + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Thumbnails */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-sm bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full px-3 py-1 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Problem Statement</h3>
              <p className="text-gray-600">{project.problemStatement}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Methodology</h3>
              <p className="text-gray-600">{project.methodology}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">{project.results}</p>
            </div>

            {project.challenges && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
                <p className="text-gray-600">{project.challenges}</p>
              </div>
            )}

            {project.futureWork && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Future Work</h3>
                <p className="text-gray-600">{project.futureWork}</p>
              </div>
            )}

            <div className="flex space-x-4 mt-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Film size={20} />
                  <span>Demo</span>
                </a>
              )}
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Research Paper</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;