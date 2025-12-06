
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Transformative Learning Program',
      company: 'Microsoft & SAP',
      role: 'Developer Intern',
      duration: 'Dec 2024 – Jan 2025',
      description: 'Built a Streamlit-based interactive chatbot with dynamic responses.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Professional journey and internship experiences
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-white/20 group-hover:border-blue-400/50 transition-all duration-300"
                  >
                    <experience.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{experience.title}</h3>
                      <p className="text-blue-400 font-medium">{experience.company}</p>
                      <p className="text-purple-400 font-medium">{experience.role}</p>
                    </div>
                    <span className="text-blue-400 font-bold text-sm bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{experience.description}</p>
                  
                  {/* Certificate Button - Bigger and more visible */}
                  <div className="flex justify-center">
                    <motion.a
                      href="https://drive.google.com/file/d/1iGudUcHqYbn1-bsuxbom94eecyWE9BG1/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-base"
                    >
                      <span>View Certificate</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
