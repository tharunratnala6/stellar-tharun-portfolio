import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const timelineItems = [
    {
      year: '2022 - 2026',
      title: 'CMR Institute of Technology',
      description: 'BTech in Computer Science and Engineering (AI&ML) • CGPA: 7.8 • Hyderabad',
      icon: GraduationCap,
    },
    {
      year: '2020 - 2022',
      title: 'Resonance Junior College',
      description: 'Intermediate Education (M.P.C) • Percentage: 91.6% • Secunderabad',
      icon: GraduationCap,
    },
    {
      year: '2018 - 2020',
      title: 'Sri Chaitanya Techno School',
      description: 'High School Education • Percentage: 85% • Ecil, Hyderabad',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Academic journey and educational achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
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
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-400 font-bold text-sm bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;