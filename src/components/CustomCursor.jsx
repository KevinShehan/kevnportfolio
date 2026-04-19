import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      // Use requestAnimationFrame for smoother cursor updates
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null ||
        e.target.closest('.theme-toggle-btn') !== null ||
        e.target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      {/* For the outer ring, we can add a slight spring delay if we want, but sticking exactly to the mouse is fine too */}
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          // Adding a slight transition delay to outer ring mimics standard custom cursor drag feel
          transition: isHovering 
            ? 'width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s' 
            : 'width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, left 0.1s linear, top 0.1s linear'
        }}
      />
    </>
  );
};

export default CustomCursor;
