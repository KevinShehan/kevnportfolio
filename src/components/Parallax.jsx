import React, { useEffect, useRef, useState } from 'react';

const Parallax = ({ children, speed = 0.15, className = '', zIndex = 1 }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // Disable intensive parallax calculations on mobile sizes to preserve battery 
    // and prevent typical touch-scroll jank, ensuring smooth UX
    if (window.matchMedia('(max-width: 768px)').matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY * speed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger measurement once
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`parallax-wrapper ${className}`}
      style={{ 
        // Force hardware acceleration with 3d bounds
        transform: `translate3d(0px, ${offset}px, 0px)`,
        willChange: 'transform',
        zIndex: zIndex,
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
