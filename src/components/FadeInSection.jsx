import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Only set up observer if we haven't already become visible
    if (!isVisible) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply optional stagger delay then show
            setTimeout(() => {
              setVisible(true);
            }, delay);
            // Once visible, we unobserve so it stays visible
            observer.unobserve(domRef.current);
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' 
      });

      if (domRef.current) {
        observer.observe(domRef.current);
      }

      return () => {
        if (domRef.current) observer.unobserve(domRef.current);
      };
    }
  }, [isVisible, delay]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
