
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Wrench, Cpu, Heart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python'],
      icon: Code,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Web Technologies',
      skills: ['HTML/CSS', 'Node.js'],
      icon: Globe,
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Frameworks',
      skills: ['OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
      icon: Cpu,
      color: 'from-purple-500/20 to-violet-500/20'
    },
    {
      title: 'Software Tools',
      skills: ['Git', 'Jupyter Notebook', 'Google Colab', 'VS Code'],
      icon: Wrench,
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Leadership', 'Adaptability', 'Critical Thinking', 'Project Management'],
      icon: Heart,
      color: 'from-pink-500/20 to-rose-500/20'
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
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:shadow-blue-500/25 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:shadow-blue-500/25 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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
                whileHover={{ y: -5, scale: 1.01 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:shadow-blue-500/25 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg"
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-pink-200 backdrop-blur-sm text-center hover:bg-pink-500/20 hover:border-pink-400/30 transition-all duration-300 cursor-pointer font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
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
