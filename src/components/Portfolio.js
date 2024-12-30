import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDarkMode, language, direction } = useTheme();
  const t = translations[language].portfolio;

  const filters = [
    { id: 'all', label: { en: 'All', ar: 'الكل' } },
    { id: 'web', label: { en: 'Web', ar: 'الويب' } },
    { id: 'mobile', label: { en: 'Mobile', ar: 'الموبايل' } },
    { id: 'design', label: { en: 'Design', ar: 'تصميم' } }
  ];

  const projects = t?.projects || [];

  useEffect(() => {
    filterProjects(activeFilter);
  }, [activeFilter, projects]);

  const filterProjects = (filter) => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === filter);
      setFilteredProjects(filtered);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div 
      name="portfolio" 
      className={`w-full min-h-screen py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-black to-gray-800 text-white' 
          : 'bg-gradient-to-b from-white to-gray-100 text-gray-800'
      }`}
      dir={direction}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            {t?.title}
          </h2>
          <p className={`text-xl mt-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t?.description}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-600 hover:text-gray-800 hover:bg-gray-300'
              }`}
            >
              {filter.label[language]}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`rounded-lg overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } group hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || 'https://via.placeholder.com/400x300'}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedProject(project)}
                          className="text-white hover:text-cyan-400 transition-colors"
                        >
                          <FaInfoCircle size={20} />
                        </motion.button>
                        {project.demo && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            <FaExternalLinkAlt size={20} />
                          </motion.a>
                        )}
                        {project.code && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            <FaGithub size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`mb-4 line-clamp-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-700'
                        } hover:bg-cyan-500 hover:text-white transition-colors duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className={`relative max-w-2xl w-full rounded-xl p-6 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
                <img
                  src={selectedProject.image || 'https://via.placeholder.com/800x400'}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-cyan-500">
                  {selectedProject.title}
                </h3>
                <p className={`mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.tech?.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
