import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Local storage priority, falls back to system
  const getInitialTheme = () => {
    return localStorage.getItem('theme-preference') || 'system';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (currentTheme) => {
      let resolvedTheme = currentTheme;
      if (currentTheme === 'system') {
        resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      // Toggle data attribute for CSS targeting
      if (resolvedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme-preference', theme);

    // Watch system changes if set to system
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Handle click cycle: light -> system -> dark -> light...
  const cycleTheme = () => {
    if (theme === 'light') setTheme('system');
    else if (theme === 'system') setTheme('dark');
    else setTheme('light');
  };

  return (
    <div 
      className="theme-toggle-btn" 
      data-state={theme} 
      onClick={cycleTheme}
      title={`Current Theme: ${theme}`}
    >
      <div className="theme-toggle-slider" />
      <div className="theme-toggle-icons">
        {/* Light Icon */}
        <div className={`theme-toggle-icon ${theme === 'light' ? 'active' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" fill={theme === 'light' ? 'currentColor' : 'none'}/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </div>
        {/* System Icon */}
        <div className={`theme-toggle-icon ${theme === 'system' ? 'active' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        {/* Dark Icon */}
        <div className={`theme-toggle-icon ${theme === 'dark' ? 'active' : ''}`}>
           <svg width="14" height="14" viewBox="0 0 24 24" fill={theme === 'dark' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
           </svg>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
