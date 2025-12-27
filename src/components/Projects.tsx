import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, Zap, Globe } from 'lucide-react';
import projectAttendance from '@/assets/project-attendance.webp';
import projectFraud from '@/assets/project-fraud.webp';
import projectInterview from '@/assets/project-interview.webp';
import projectPortfolio from '@/assets/project-portfolio.webp';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'AI/ML', 'Web Dev', 'Portfolio'];
  
  const projects = [
    {
      id: 1,
      title: 'Automated Smart Attendance System',
      description: 'Engineered an intelligent attendance management system leveraging computer vision technology. Implemented advanced facial recognition algorithms using OpenCV for real-time detection and identification. Developed an intuitive GUI interface with Tkinter for seamless user interaction and administrative control.',
      image: projectAttendance,
      tags: ['Python', 'OpenCV', 'Tkinter', 'Machine Learning'],
      category: 'AI/ML',
      github: 'https://github.com/tharunratnala6/SmartAttendance',
      featured: true,
    },
    {
      id: 2,
      title: 'Credit Card Fraud Detection',
      description: 'Developed a sophisticated machine learning pipeline for financial fraud detection utilizing advanced algorithms and statistical analysis. Implemented feature engineering techniques, data preprocessing, and model optimization to achieve high accuracy in identifying anomalous transaction patterns while minimizing false positives.',
      image: projectFraud,
      tags: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn'],
      category: 'AI/ML',
      github: 'https://github.com/tharunratnala6/Credit-Card-Fraud-Detection',
      featured: true,
    },
    {
      id: 3,
      title: 'Smart Interview Buddy',
      description: 'Architected an AI-powered interview simulation platform integrating computer vision and natural language processing. Implemented real-time facial expression analysis, voice sentiment detection, and behavioral pattern recognition. Developed comprehensive resume parsing algorithms with intelligent keyword optimization and formatting recommendations for enhanced candidate preparation.',
      image: projectInterview,
      tags: ['OpenCV', 'Machine Learning', 'Flask', 'Python'],
      category: 'AI/ML',
      github: 'https://github.com/tharunratnala6/smartinterview-buddy-37',
      featured: false,
    },
    {
      id: 4,
      title: 'Dynamic Webpage Portfolio',
      description: 'Crafted a cutting-edge portfolio website featuring advanced animations, 3D transforms, and interactive elements. Implemented responsive design principles with optimized performance, accessibility standards, and modern web technologies. Showcases technical expertise through dynamic content presentation and immersive user experience.',
      image: projectPortfolio,
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      category: 'Portfolio',
      github: 'https://tharunratnala-portfolio.lovable.app/',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group relative hover:shadow-blue-500/25 transition-all duration-500"
            >

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  width={640}
                  height={384}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-blue-200 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Code Button - Bigger and more visible */}
                <div className="flex justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-base cursor-pointer z-50 relative"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;