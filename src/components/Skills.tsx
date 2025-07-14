
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python']
    },
    {
      title: 'Web Technologies',
      skills: ['HTML/CSS', 'Node.js']
    },
    {
      title: 'Frameworks',
      skills: ['OpenCV', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      title: 'Software Tools',
      skills: ['Git', 'Jupyter Notebook', 'Google Colab', 'VS Code']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Leadership', 'Adaptability', 'Critical Thinking', 'Project Management']
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Mastering cutting-edge technologies to build tomorrow's solutions
          </p>
        </motion.div>

        {/* Skills */}
        <div className="space-y-8">
          {/* First Row: Programming & Web Technologies */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.slice(0, 2).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
                
                <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row: Frameworks & Software Tools */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.slice(2, 4).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (categoryIndex + 2) * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
                
                <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Row: Soft Skills (Full Width) */}
          <div className="w-full">
            {skillCategories.slice(4, 5).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (categoryIndex + 4) * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
                
                <h3 className="text-lg font-bold text-white mb-4 text-center">{category.title}</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 backdrop-blur-sm text-center"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
