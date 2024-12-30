import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';
import * as Si from 'react-icons/si';

const Skills = () => {
  const { isDarkMode, language, direction } = useTheme();
  const t = translations[language].skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const sections = Object.keys(t.sections);

  const renderSkillIcon = (iconName) => {
    const Icon = Si[iconName];
    return Icon ? <Icon size={40} /> : null;
  };

  return (
    <div
      name="skills"
      className={`w-full min-h-screen ${
        isDarkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' 
                  : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'
      }`}
      dir={direction}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">
            {t.title}
          </h2>
          <p className="py-6">{t.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sections.map((section) => (
            <motion.div
              key={section}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode
                  ? 'bg-gray-800/50 hover:bg-gray-700/50'
                  : 'bg-white hover:bg-gray-50'
              } transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">
                {t.sections[section].title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {t.sections[section].skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg ${
                      isDarkMode
                        ? 'bg-gray-900/50 hover:bg-gray-900'
                        : 'bg-gray-100/50 hover:bg-gray-200'
                    } flex flex-col items-center justify-center gap-2 transition-colors duration-300 group`}
                  >
                    <div className={`text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300`}>
                      {renderSkillIcon(skill.icon)}
                    </div>
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-cyan-500">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {[
              {
                period: '2022 - Present',
                role: 'Senior Full Stack Developer',
                company: 'Tech Solutions Inc.',
                description: 'Leading development of enterprise web and mobile applications using React, Flutter, and Node.js.',
                tech: ['React', 'Flutter', 'Node.js', 'AWS']
              },
              {
                period: '2020 - 2022',
                role: 'Mobile Developer',
                company: 'Mobile Innovations Ltd.',
                description: 'Developed cross-platform mobile applications using Flutter and React Native.',
                tech: ['Flutter', 'React Native', 'Firebase']
              },
              {
                period: '2018 - 2020',
                role: 'Android Developer',
                company: 'Android Apps Co.',
                description: 'Built native Android applications using Java and Kotlin.',
                tech: ['Android', 'Java', 'Kotlin']
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`relative p-6 rounded-lg shadow-lg ${
                  isDarkMode
                    ? 'bg-gray-800/50 hover:bg-gray-700/50'
                    : 'bg-white hover:bg-gray-50'
                } transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-cyan-500">{exp.role}</h4>
                    <p className="text-lg">{exp.company}</p>
                  </div>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
