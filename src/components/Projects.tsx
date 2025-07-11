
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, Zap } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'AI/ML', 'Web Dev', 'Mobile', 'IoT', 'Blockchain'];
  
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      description: 'Smart task management system with AI recommendations and natural language processing.',
      image: '/placeholder.svg',
      tags: ['React', 'Python', 'TensorFlow', 'NLP'],
      category: 'AI/ML',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Decentralized Voting Platform',
      description: 'Blockchain-based voting system ensuring transparency and security in elections.',
      image: '/placeholder.svg',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      category: 'Blockchain',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Modern chat app with video calling, file sharing, and AI-powered moderation.',
      image: '/placeholder.svg',
      tags: ['Node.js', 'Socket.io', 'React', 'WebRTC'],
      category: 'Web Dev',
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Smart Home IoT System',
      description: 'Integrated IoT platform for home automation with mobile app control.',
      image: '/placeholder.svg',
      tags: ['Arduino', 'React Native', 'Firebase', 'IoT'],
      category: 'IoT',
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'E-commerce Mobile App',
      description: 'Full-featured shopping app with AR product preview and payment integration.',
      image: '/placeholder.svg',
      tags: ['React Native', 'Node.js', 'MongoDB', 'ARKit'],
      category: 'Mobile',
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Machine Learning Dashboard',
      description: 'Interactive dashboard for visualizing ML model performance and data insights.',
      image: '/placeholder.svg',
      tags: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      category: 'AI/ML',
      github: '#',
      demo: '#',
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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border backdrop-blur-sm ${
                activeFilter === filter
                  ? 'bg-blue-500/20 border-blue-400/50 text-blue-400'
                  : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-blue-500/10 rounded-full border border-blue-400/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group relative ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
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
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-blue-200 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 py-2 bg-white/10 rounded-lg text-center text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    Demo
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
