import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building, Download, Eye } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'Python',
      issuer: 'IITM GUVI',
      date: '2024',
      type: 'Certificate',
      description: 'Python programming fundamentals covered',
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
      description: 'AI ML virtual internship program',
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
      description: 'Android development internship program',
      skills: ['Android', 'Java', 'Mobile Development', 'UI/UX'],
      verifyUrl: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=c1ca905e0334738ad74e7c2f5dfb386e',
      status: 'Active',
    },
    {
      id: 4,
      title: 'Core Java',
      issuer: 'Certificate Provider',
      date: '2024',
      type: 'Certificate',
      description: 'Java programming language fundamentals',
      skills: ['Java', 'OOP', 'Programming', 'Software Development'],
      verifyUrl: 'https://drive.google.com/file/d/1ey5twC_beAQluRuPQnLupKr_6o-Pag4y/view?usp=drive_link',
      status: 'Active',
    },
    {
      id: 5,
      title: 'DeepLearning AI',
      issuer: 'Coursera',
      date: '2024',
      type: 'Certificate',
      description: 'Deep learning techniques and applications',
      skills: ['Deep Learning', 'Neural Networks', 'AI', 'TensorFlow'],
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/BT98LTAYY738',
      status: 'Active',
    },
    {
      id: 6,
      title: 'Java',
      issuer: 'Great Learning',
      date: '2024',
      type: 'Certificate',
      description: 'Java programming and development skills',
      skills: ['Java', 'Programming', 'Development', 'Coding'],
      verifyUrl: 'https://www.mygreatlearning.com/certificate/YITZEJGQ',
      status: 'Active',
    },
  ];

  const CertModal = ({ cert, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
            <p className="text-blue-400 font-medium">{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm">Issue Date</label>
              <p className="text-white font-medium">{cert.date}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Credential ID</label>
              <p className="text-white font-medium font-mono text-sm">{cert.credentialId}</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Status</label>
              <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                {cert.status}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8">
            <Award className="w-16 h-16 text-blue-400" />
          </div>
        </div>

        <p className="text-gray-300 mb-6">{cert.description}</p>

        <div className="mb-6">
          <label className="text-gray-400 text-sm mb-2 block">Skills Covered</label>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Verify Certificate
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

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
            Professional credentials validating expertise across multiple domains
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group relative hover:shadow-blue-500/25 transition-all duration-500"
            >
              {/* Certificate Header */}
              <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl"
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.type === 'Certificate' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : cert.type === 'Internship'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                  <Building className="w-4 h-4" />
                  {cert.issuer}
                </div>
                
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
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

                {/* Actions - View Button with Direct Link */}
                <div className="flex gap-2">
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <CertModal 
            cert={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Certifications;
