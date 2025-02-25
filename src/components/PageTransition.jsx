import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      transitionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    return () => {
      gsap.to(transitionRef.current, { opacity: 0, y: -50, duration: 0.5 });
    };
  }, [location]);

  return <div ref={transitionRef} className="page-transition">{children}</div>;
};

export default PageTransition;
