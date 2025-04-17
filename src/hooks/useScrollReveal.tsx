
import { useEffect, useState, useRef, RefObject } from 'react';

export function useScrollReveal(): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.classList.add('revealed');
    }
  }, [isVisible]);
  
  return ref;
}
