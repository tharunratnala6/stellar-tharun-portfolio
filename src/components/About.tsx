
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

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
            Passionate about creating innovative solutions that bridge the gap between imagination and reality
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
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-3xl font-bold text-white mb-2">Tharun Ratnala</h3>
              <p className="text-blue-200 text-lg mb-6">Final Year Engineering Student</p>
              
              {/* Bio */}
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a motivated Computer Science Engineering student passionate about learning and delivering quality results. With
                strong organizational skills and a growth mindset, I'm eager to take on new challenges and gain hands-on experience
                through internships and real-world projects. Excited for my first work opportunity—let's create something great!
              </p>

              {/* Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/17to5VpBAfQRacPXPC9gxVTHTlT5mSbZJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white font-semibold border border-green-400/30 backdrop-blur-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
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
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden">
                <img 
                  src="/src/assets/profile-photo.jpg" 
                  alt="Tharun Ratnala" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-110 -z-10" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
