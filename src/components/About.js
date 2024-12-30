import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';

const About = () => {
  const { isDarkMode, language, direction } = useTheme();
  const t = translations[language]?.about || {
    title: language === 'en' ? 'About Me' : 'عني',
    description: []
  };

  const features = [
    {
      icon: <FaCode className="text-4xl text-cyan-500" />,
      title: language === 'en' ? 'Frontend Development' : 'تطوير الواجهات',
      description: language === 'en' 
        ? 'Building responsive and interactive user interfaces with modern frameworks'
        : 'بناء واجهات مستخدم تفاعلية ومتجاوبة باستخدام أحدث التقنيات'
    },
    {
      icon: <FaMobileAlt className="text-4xl text-cyan-500" />,
      title: language === 'en' ? 'Mobile Development' : 'تطوير الموبايل',
      description: language === 'en'
        ? 'Creating native and cross-platform mobile applications'
        : 'إنشاء تطبيقات موبايل أصلية ومتعددة المنصات'
    },
    {
      icon: <FaServer className="text-4xl text-cyan-500" />,
      title: language === 'en' ? 'Backend Development' : 'تطوير الخلفية',
      description: language === 'en'
        ? 'Developing robust and scalable server-side solutions'
        : 'تطوير حلول خلفية قوية وقابلة للتوسع'
    },
    {
      icon: <FaTools className="text-4xl text-cyan-500" />,
      title: language === 'en' ? 'DevOps & Tools' : 'أدوات التطوير',
      description: language === 'en'
        ? 'Implementing CI/CD pipelines and modern development tools'
        : 'تنفيذ أنابيب التكامل المستمر وأدوات التطوير الحديثة'
    }
  ];

  return (
    <div
      name="about"
      className={`w-full min-h-screen pt-24 ${
        isDarkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white'
                  : 'bg-gradient-to-b from-white to-gray-100 text-gray-900'
      }`}
      dir={direction}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="inline-block border-b-4 border-cyan-500">
                {t.title}
              </span>
            </h2>
            <div className="space-y-4">
              {t.description?.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Animated Decoration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className={`relative w-64 h-64 ${
              isDarkMode ? 'bg-gray-700/30' : 'bg-gray-200/50'
            } rounded-full overflow-hidden`}>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                ></motion.div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`p-6 rounded-lg ${
                isDarkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50'
                  : 'bg-white hover:bg-gray-50'
              } transition-all duration-300 shadow-lg group`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-500">
                    {feature.title}
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
