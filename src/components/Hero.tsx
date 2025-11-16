
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Futuristic Developer",
    "Tech Explorer", 
    "AI Innovator",
    "Engineering Student"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    if (displayedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentTextIndex, texts]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Glass Panel with Enhanced Hover Effects */}
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02, 
            rotateX: 2, 
            rotateY: 2,
            transition: { duration: 0.3 }
          }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          {/* Enhanced Glowing borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl -z-10 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-500" />
          
          {/* Floating particles effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          
          {/* Fixed Name with Enhanced Hover */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-500"
            whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          >
            Hi, I'm Tharun Ratnala
          </motion.h1>

          {/* Typing Animation */}
          <motion.div 
            className="text-3xl md:text-4xl font-semibold mb-6 text-blue-200 h-[60px] md:h-[72px] flex items-center justify-center group-hover:text-blue-100 transition-colors duration-300"
          >
            <div className="flex items-center justify-center w-full">
              <span className="inline-block text-center" style={{ minWidth: '280px' }}>{displayedText}</span>
              <motion.span
                className="inline-block w-1 h-8 bg-blue-400 ml-2 flex-shrink-0"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <p 
            className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto group-hover:text-blue-100 transition-colors duration-300"
          >
            Final Year Engineering Student crafting the future with code, AI, and innovation
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                rotateX: 5,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold border border-blue-400/30 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/1IcUlpHNS8fRi-tmvl57FT7SqC8Jf-cw_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                rotateX: 5,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold border border-blue-400/30 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex items-center justify-center gap-2"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>

          {/* Working Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/tharunratnala6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.4, 
                y: -12, 
                rotate: 10,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-white/10 border border-white/20 text-white/70 transition-all duration-300 hover:text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/50 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Github className="w-6 h-6 relative z-10" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tharunratnala6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.4, 
                y: -12, 
                rotate: -10,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-white/10 border border-white/20 text-white/70 transition-all duration-300 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Linkedin className="w-6 h-6 relative z-10" />
            </motion.a>

            <motion.a
              href="mailto:tharunratnala6@gmail.com"
              whileHover={{ 
                scale: 1.4, 
                y: -12, 
                rotate: 10,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-white/10 border border-white/20 text-white/70 transition-all duration-300 hover:text-green-400 hover:bg-green-500/20 hover:border-green-500/50 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Mail className="w-6 h-6 relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2, rotate: 180 }}
          className="p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm cursor-pointer hover:border-blue-400/50 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
