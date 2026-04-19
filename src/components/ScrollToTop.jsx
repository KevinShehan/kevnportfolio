import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
      setIsVisible(scrollY > 200);

      if (circleRef.current) {
        const scrollHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        const clientHeight = window.innerHeight;
        const scrollTotal = scrollHeight - clientHeight;
        
        if (scrollTotal > 0) {
          const progress = Math.min(1, Math.max(0, scrollY / scrollTotal));
          const offset = circumference - (progress * circumference);
          circleRef.current.style.strokeDashoffset = String(offset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run immediately on mount
    handleScroll();
    // Also run after a short delay to catch late-loading content
    const timer = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Use a portal to render directly into document.body
  // This guarantees the button is NEVER clipped or hidden by any parent container
  return ReactDOM.createPortal(
    <div 
      onClick={scrollToTop}
      title="Back to Top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), visibility 0.4s ease',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        background: 'var(--glass-bg, rgba(255,255,255,0.7))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--glass-border, rgba(0,0,0,0.05))',
        boxShadow: isVisible ? '0 8px 32px rgba(99, 102, 241, 0.2)' : 'none',
      }}
    >
      <svg width="64" height="64" viewBox="0 0 64 64">
        {/* Background track */}
        <circle cx="32" cy="32" r={radius} fill="none" stroke="var(--glass-border, rgba(0,0,0,0.1))" strokeWidth="3" />
        
        {/* Animated Progress ring */}
        <circle
          ref={circleRef}
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="url(#scroll-gradient-ring)"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
        <defs>
          <linearGradient id="scroll-gradient-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-1, #6366f1)" />
            <stop offset="100%" stopColor="var(--accent-3, #ec4899)" />
          </linearGradient>
        </defs>
        
        {/* Arrow icon */}
        <g>
          <path 
            d="M32 22 L32 42 M32 22 L26 28 M32 22 L38 28" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none"
          />
          <path d="M28 42 L32 46 L36 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
        </g>
      </svg>
    </div>,
    document.body
  );
};

export default ScrollToTop;
