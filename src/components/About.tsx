
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
const profilePhoto = '/images/profile-photo-small.webp';

const About = () => {

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Passionate Computer Science student eager to make a mark in the tech industry through innovation and dedication
          </p>
        </motion.div>

        {/* Profile Section - Name and Picture at Top */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Name and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 relative z-10"
              >
                THARUN RATNALA
              </motion.h3>
              <motion.p 
                whileHover={{ x: 5 }}
                className="text-blue-200 text-xl mb-6 relative z-10 transition-all duration-300"
              >
                Final Year Engineering Student
              </motion.p>
              
              {/* Bio */}
              <motion.p 
                whileHover={{ scale: 1.01 }}
                className="text-gray-300 leading-relaxed mb-6 relative z-10 transition-all duration-300"
              >
                I'm a motivated Computer Science Engineering student passionate about learning and delivering quality results. With
                strong organizational skills and a growth mindset, I'm eager to take on new challenges and gain hands-on experience
                through internships and real-world projects. Excited for my first work opportunity—let's create something great!
              </motion.p>

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1IcUlpHNS8fRi-tmvl57FT7SqC8Jf-cw_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
                  y: -2 
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white font-semibold border border-green-400/30 backdrop-blur-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 relative z-10"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.08, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)"
              }}
              className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 transition-all duration-500"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Tharun Ratnala" 
                  width={320}
                  height={320}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-110 -z-10 transition-all duration-500" 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
