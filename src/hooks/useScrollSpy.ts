import { useState, useEffect } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      let current = '';
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = sectionElement.id;
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return activeSection;
}