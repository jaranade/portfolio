"use client"

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Add no-cursor class to html and body
    document.documentElement.classList.add('no-cursor');
    document.body.classList.add('no-cursor');

    const updatePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
        
        setTrail(prev => {
          const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
          if (newTrail.length > 5) newTrail.shift();
          return newTrail;
        });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [role="button"], input, select, textarea'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('no-cursor');
      document.body.classList.remove('no-cursor');
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[999999] transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      >
        <div className="relative">
          <div className="absolute -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-primary rounded-full opacity-80" />
          </div>
          <div className="absolute -translate-x-1/2 -translate-y-1/2">
            <div 
              className={`w-8 h-8 rounded-full border border-primary/30 
              transition-transform duration-200
              ${isHovering ? 'scale-150 border-primary/50' : 'scale-100'}`} 
            />
          </div>
        </div>
      </div>

      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[999998] w-1.5 h-1.5 bg-primary/20 rounded-full"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length,
            scale: 1 - index * 0.15,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;