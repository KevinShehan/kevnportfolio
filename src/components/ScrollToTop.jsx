import React, { useState, useEffect, useRef } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Use requestAnimationFrame for 60FPS fluid animation without blocking main thread
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (scrollTotal > 0) {
            const scrollY = window.scrollY;
            const progress = Math.min(1, Math.max(0, scrollY / scrollTotal));
            
            // Toggle visibility - only update React state when crossing threshold
            if (progress > 0.01 && !isVisible) {
              setIsVisible(true);
            } else if (progress <= 0.01 && isVisible) {
              setIsVisible(false);
            }

            // Direct DOM manipulation of the SVG dash offset for hyper-smooth scrolling animation (avoids React re-renders)
            if (circleRef.current) {
              const strokeDashoffset = circumference - (progress * circumference);
              circleRef.current.style.strokeDashoffset = strokeDashoffset;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, circumference]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <svg width="64" height="64" viewBox="0 0 64 64" className="progress-ring">
        {/* Background track */}
        <circle cx="32" cy="32" r={radius} fill="var(--glass-bg)" stroke="var(--glass-border)" strokeWidth="3" />
        
        {/* Animated Progress ring */}
        <circle
          ref={circleRef}
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="url(#gradient-ring)"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Start empty
          strokeLinecap="round"
          className="progress-circle"
        />
        <defs>
          <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-1)" />
            <stop offset="100%" stopColor="var(--accent-3)" />
          </linearGradient>
        </defs>
        
        {/* Stylish Modern Rocket / Jet Arrow */}
        {/* Wrapped in a 'g' rotated 90deg to compensate for the .progress-ring css -90deg rotation */}
        <g transform="rotate(90 32 32)">
           <path 
             d="M32 20 L32 44 M32 20 L24 28 M32 20 L40 28" 
             stroke="currentColor" 
             strokeWidth="3" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             fill="none"
             className="arrow-icon"
           />
           {/* Thrust tail detail for tech vibe */}
           <path d="M28 44 L32 48 L36 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
        </g>
      </svg>
    </div>
  );
};

export default ScrollToTop;
