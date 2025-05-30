import React, { useState } from 'react';
import { publicationsData } from '../data/publications';
import { useAnimationObserver } from '../hooks/useIntersectionObserver';
import { FileText, ChevronDown, ChevronUp, ExternalLink, Calendar } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  useAnimationObserver();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  
  const toggleExpand = (title: string) => {
    const newExpandedIds = new Set(expandedIds);
    if (newExpandedIds.has(title)) {
      newExpandedIds.delete(title);
    } else {
      newExpandedIds.add(title);
    }
    setExpandedIds(newExpandedIds);
  };
  
  return (
    <section id="publications" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <h2 className="text-center text-gray-900 font-bold mb-12 fade-in-bottom">Publications & Research</h2>
        
        <div className="space-y-6 sm:space-y-8">
          {publicationsData.map((publication, index) => {
            const isExpanded = expandedIds.has(publication.title);
            
            return (
              <div 
                key={publication.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden fade-in-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="p-4 sm:p-8 cursor-pointer"
                  onClick={() => toggleExpand(publication.title)}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex items-start">
                      <div className="bg-blue-600/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                        <FileText size={20} className="text-blue-600 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>
                        <p className="text-sm sm:text-base text-gray-700 mb-2">{publication.authors}</p>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <Calendar size={14} className="mr-2" />
                          <span>{publication.venue}, {publication.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-start sm:self-center">
                      {isExpanded ? 
                        <ChevronUp className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" /> : 
                        <ChevronDown className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
                      }
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-4 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-gray-200">
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Abstract</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{publication.abstract}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {publication.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 sm:px-3 py-1 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {publication.link && (
                        <a 
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 flex items-center transition-colors"
                        >
                          <ExternalLink size={14} className="mr-2" /> View Publication
                        </a>
                      )}
                      
                      {publication.doi && (
                        <span className="text-xs sm:text-sm text-gray-500">
                          DOI: {publication.doi}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;