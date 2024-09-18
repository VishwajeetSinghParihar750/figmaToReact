import React, { useEffect, useRef } from 'react';

const AnimationSlideUp = ({ children, delay = 0, visible = true }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      }
    );

    const element = elementRef.current;
    element.style.transitionDelay = `${delay}s`;
    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, visible]);

  return (
    <div
      ref={elementRef}
      className={`opacity-0 transform translate-y-8 transition-all duration-700 ease-in-out ${visible ? '' : 'hidden'}`}
      style={{
        transitionProperty: 'transform, opacity',
      }}
    >
      {children}

      <style>
        {`
          .slide-up-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default AnimationSlideUp;
