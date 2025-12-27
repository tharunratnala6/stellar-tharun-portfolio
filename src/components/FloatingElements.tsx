
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Reduced from 50 to 15 particles for better performance
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Particles - using CSS animations for better performance */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Glowing Orbs - reduced to 2 */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(147, 51, 234, 0.1)'
            } 0%, transparent 70%)`,
            left: `${25 + i * 40}%`,
            top: `${30 + i * 25}%`,
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18 + i * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default FloatingElements;
