
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building, Eye } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Python Programming',
      issuer: 'IITM GUVI',
      date: '2024',
      type: 'Certificate',
      description: 'Mastered Python programming fundamentals including data structures, algorithms, and object-oriented programming concepts',
      skills: ['Python', 'Programming', 'Coding', 'Development'],
      verifyUrl: 'https://digitalskills.iitmpravartak.org.in/verify/cert/3z91Vi67268p2B15FG',
      status: 'Active',
    },
    {
      id: 2,
      title: 'AIML Virtual Intern',
      issuer: 'AICTE-GOOGLE',
      date: '2024',
      type: 'Internship',
      description: 'Completed comprehensive AI and Machine Learning virtual internship covering neural networks, data science, and practical implementations',
      skills: ['AI', 'Machine Learning', 'Python', 'Data Science'],
      verifyUrl: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=659a4a39ccd266a7406feb3fddf69e99',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Android Developer Intern',
      issuer: 'AICTE-GOOGLE',
      date: '2024',
      type: 'Internship',
      description: 'Gained hands-on experience in Android app development, UI/UX design, and mobile application lifecycle management',
      skills: ['Android', 'Java', 'Mobile Development', 'UI/UX'],
      verifyUrl: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=c1ca905e0334738ad74e7c2f5dfb386e',
      status: 'Active',
    },
    {
      id: 4,
      title: 'Core Java Programming',
      issuer: 'Certificate Provider',
      date: '2024',
      type: 'Certificate',
      description: 'Demonstrated proficiency in Core Java programming including OOP principles, exception handling, and collection frameworks',
      skills: ['Java', 'OOP', 'Programming', 'Software Development'],
      verifyUrl: 'https://drive.google.com/file/d/1ey5twC_beAQluRuPQnLupKr_6o-Pag4y/view?usp=drive_link',
      status: 'Active',
    },
    {
      id: 5,
      title: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: '2024',
      type: 'Certificate',
      description: 'Completed advanced deep learning specialization covering neural networks, CNN, RNN, and practical AI applications',
      skills: ['Deep Learning', 'Neural Networks', 'AI', 'TensorFlow'],
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/BT98LTAYY738',
      status: 'Active',
    },
    {
      id: 6,
      title: 'Java Programming',
      issuer: 'Great Learning',
      date: '2024',
      type: 'Certificate',
      description: 'Advanced Java programming course covering enterprise-level development patterns and best practices',
      skills: ['Java', 'Programming', 'Development', 'Coding'],
      verifyUrl: 'https://www.mygreatlearning.com/certificate/YITZEJGQ',
      status: 'Active',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating commitment to continuous learning and professional excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05, 
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group relative hover:shadow-blue-500/25 transition-all duration-500 cursor-pointer"
            >
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Certificate Header */}
              <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl group-hover:shadow-lg"
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.type === 'Certificate' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : cert.type === 'Internship'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}
                  >
                    {cert.type}
                  </motion.span>
                </div>

                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {cert.title}
                </motion.h3>
                
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  <Building className="w-4 h-4" />
                  {cert.issuer}
                </div>
                
                <div className="flex items-center gap-2 text-gray-300 text-sm group-hover:text-blue-200 transition-colors duration-300">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-blue-200 hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-gray-400">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Certificate View Button */}
                <div className="flex gap-2">
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.div>
                    <span className="relative z-10">Certificate View</span>
                  </motion.a>
                </div>
              </div>

              {/* Floating particles effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
