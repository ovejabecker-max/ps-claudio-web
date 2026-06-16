import React, { useState, useEffect, useRef } from 'react';

/**
 * SplitText - Componente Animación Tipográfica Cinematográfica
 */
const SplitText = ({ words, delayOffset = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 }
    );
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={domRef} className={`inline-block ${className}`}>
      {words.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden pb-3 mr-[0.25em] align-bottom">
          <span
            className={`inline-block transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[120%]'} ${item.highlight ? `text-transparent bg-clip-text bg-linear-to-r ${item.highlight}` : ''}`}
            style={{ transitionDelay: `${delayOffset + i * 150}ms` }}
          >
            {item.text}
          </span>
        </span>
      ))}
    </div>
  );
};

export default SplitText;
