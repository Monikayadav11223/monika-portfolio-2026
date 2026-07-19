import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GlowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 rounded-full border border-primary mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 200 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px] mix-blend-screen"
        animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.8 }}
      />
    </>
  );
};
