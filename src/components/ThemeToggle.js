import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaLanguage } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`p-2 rounded-full shadow-lg ${
          isDarkMode
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-white text-gray-800 hover:bg-gray-100'
        } transition-colors duration-200`}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLanguage}
        className={`p-2 rounded-full shadow-lg ${
          isDarkMode
            ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
            : 'bg-white text-gray-800 hover:bg-gray-100'
        } transition-colors duration-200`}
        aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      >
        <FaLanguage size={20} />
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
