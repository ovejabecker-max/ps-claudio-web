import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const updateHover = (e) => {
      // Detectar si el mouse está sobre un elemento clickeable
      const isInteractive = e.target.closest('a, button, input, [role="button"]');
      setIsHovering(!!isInteractive);
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHover);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHover);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-100 hidden md:block transition-transform duration-100 ease-out mix-blend-difference"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className={`bg-white rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
        isHovering ? 'w-16 h-16 -ml-8 -mt-8 opacity-40 scale-125' : 'w-4 h-4 -ml-2 -mt-2 opacity-100'
      }`} />
    </div>
  );
};

export default CustomCursor;
