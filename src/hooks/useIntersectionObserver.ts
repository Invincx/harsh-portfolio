import { useEffect, useRef } from 'react';

export function useIntersectionObserver(callback: () => void, options = {}) {
  const targetRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, {
      threshold: 0.1,
      ...options
    });
    
    const currentTarget = targetRef.current;
    
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [callback, options]);
  
  return targetRef;
}

export function useAnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    const elements = document.querySelectorAll('.fade-in-bottom');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}