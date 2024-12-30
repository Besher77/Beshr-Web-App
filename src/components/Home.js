import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaCode, FaDownload } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';

const Home = () => {
  const { isDarkMode, language, direction } = useTheme();
  const t = translations[language]?.home || {
    greeting: language === 'en' ? 'Hi, I\'m' : 'مرحباً، أنا',
    name: 'Beshr Qashar',
    role: language === 'en' ? 'Full Stack Developer' : 'مطور ويب شامل',
    description: language === 'en' 
      ? 'I\'m a passionate developer specializing in building exceptional digital experiences.'
      : 'أنا مطور متحمس متخصص في بناء تجارب رقمية استثنائية.',
    cta: language === 'en' ? 'Explore Portfolio' : 'استكشف الأعمال',
    downloadCV: language === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية',
    social: {
      github: 'https://github.com/beshrqashar',
      linkedin: 'https://www.linkedin.com/in/beshrqashar/',
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const renderAnimatedText = (text) => {
    return (
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={char === ' ' ? 'mr-2' : ''}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      name="home"
      className={`w-full min-h-screen pt-24 ${
        isDarkMode
          ? 'bg-gradient-to-b from-black to-gray-800 text-white'
          : 'bg-gradient-to-b from-white to-gray-100 text-gray-900'
      } relative overflow-hidden`}
      dir={direction}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,rgba(59,130,246,0.05)_25%,transparent_50%)]"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          className={`absolute w-2 h-2 rounded-full ${
            isDarkMode ? 'bg-cyan-500' : 'bg-blue-500'
          } opacity-20`}
        />
      ))}

      <div className="max-w-screen-xl mx-auto h-full px-4 flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:w-1/2"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.div animate={floatingAnimation}>
              <FaCode className="text-2xl text-cyan-500" />
            </motion.div>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-lg sm:text-xl text-cyan-500 font-medium"
            >
              {t.greeting}
            </motion.p>
          </motion.div>

          {/* Name */}
          <div className="text-4xl sm:text-6xl font-bold">
            {renderAnimatedText(t.name)}
          </div>

          {/* Role */}
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-3xl sm:text-5xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 animate-gradient">
              {t.role}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className={`py-4 max-w-2xl text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex gap-4 flex-wrap"
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg 
                overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <motion.span
                initial={{ width: '100%' }}
                whileHover={{ width: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
              />
              <span className="relative">
                {t.cta}
              </span>
              <motion.span
                animate={{
                  x: direction === 'rtl' ? [-8, 0] : [0, 8],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.8
                }}
                className={`relative ml-2 ${
                  direction === 'rtl' ? 'rotate-180' : ''
                }`}
              >
                →
              </motion.span>
            </Link>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg 
                hover:bg-cyan-500 hover:text-white transition-all duration-300 gap-2"
            >
              <FaDownload className="text-lg" />
              {t.downloadCV}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex gap-4 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={t.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <FaGithub size={20} />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={t.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg flex items-center gap-2 font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
            
            {/* Simple border and image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/30">
              <img
                src="https://avatars.hsoubcdn.com/e79c3623ed1c42ffc35617a2d3ea8560?s=256"
                alt="Beshr Qashar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth duration={500} className="cursor-pointer">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Scroll Down
              </span>
              <HiArrowDown size={30} className="text-cyan-500" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
