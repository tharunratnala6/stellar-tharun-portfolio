
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const timelineItems = [
    {
      year: '2022 - 2026',
      title: 'CMR Institute of Technology',
      subtitle: 'BTech in Computer Science and Engineering (AI&ML)',
      description: 'Specializing in Artificial Intelligence and Machine Learning with comprehensive coursework in advanced computing technologies.',
      details: [
        'CGPA: 7.7',
        'Location: Hyderabad',
        'Focus: AI/ML, Software Engineering and CSE core subjects'
      ],
      icon: GraduationCap,
    },
    {
      year: '2020 - 2022',
      title: 'Resonance Junior College',
      subtitle: 'Intermediate Education (M.P.C)',
      description: 'Mathematics, Physics, and Chemistry specialization with strong foundation in analytical and problem-solving skills.',
      details: [
        'Percentage: 91.6%',
        'Location: Secunderabad',
        'Stream: Science with Mathematics'
      ],
      icon: GraduationCap,
    },
    {
      year: '2018 - 2020',
      title: 'Sri Chaitanya Techno School',
      subtitle: 'High School Education',
      description: 'Comprehensive secondary education with strong foundation in core subjects and academic excellence.',
      details: [
        'Percentage: 80%',
        'Location: Ecil, Hyderabad',
        'Board: State Board of Telangana'
      ],
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
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-white/20 group-hover:border-blue-400/50 transition-all duration-300 shadow-lg"
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="flex-1 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-blue-400/30 transition-all duration-300 hover:shadow-2xl relative">
                  {/* Year box moved to right side */}
                  <div className="absolute top-6 right-6">
                    <span className="text-blue-400 font-bold text-sm bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                      {item.year}
                    </span>
                  </div>
                  
                  <h4 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors duration-300 pr-24">
                    {item.title}
                  </h4>
                  <h5 className="text-blue-200 font-medium text-base mb-3">
                    {item.subtitle}
                  </h5>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
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

export default Education;
