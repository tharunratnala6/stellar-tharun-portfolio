
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-sm" />
    </div>
  );
};

export default ScrollProgress;
