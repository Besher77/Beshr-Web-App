import React, { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, language, direction } = useTheme();
  const t = translations[language].navbar;

  const links = useMemo(() => [
    { id: 1, link: 'home', label: t.home },
    { id: 2, link: 'about', label: t.about },
    { id: 3, link: 'portfolio', label: t.portfolio },
    { id: 4, link: 'skills', label: t.skills },
    { id: 5, link: 'contact', label: t.contact },
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.link);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
      
      // Add scrolled state for navbar background
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'bg-black/95 shadow-lg shadow-black/20'
            : 'bg-white/95 shadow-lg shadow-gray-200/20'
          : isDarkMode
            ? 'bg-transparent'
            : 'bg-transparent'
      } backdrop-blur-sm`}
      dir={direction}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold relative group"
        >
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            {t.logo}
          </span>
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"
            whileHover={{ width: '100%' }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, link, label }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
              className="relative px-1"
            >
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active"
                className={`relative block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link
                    ? isDarkMode
                      ? 'text-cyan-400'
                      : 'text-cyan-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
                {activeSection === link && (
                  <motion.div
                    layoutId="navbar-active"
                    className={`absolute inset-0 rounded-lg ${
                      isDarkMode
                        ? 'bg-cyan-500/10'
                        : 'bg-cyan-500/10'
                    } -z-10`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-all duration-300"
                  whileHover={{ width: '100%', opacity: 1 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-10"
        >
          <AnimatePresence mode="wait">
            {nav ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes size={30} className="text-cyan-500" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars size={30} className="text-cyan-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {nav && (
            <motion.div
              initial={{ opacity: 0, x: direction === 'rtl' ? '100%' : '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'rtl' ? '100%' : '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`fixed top-0 ${
                direction === 'rtl' ? 'right-0' : 'left-0'
              } w-full h-screen ${
                isDarkMode
                  ? 'bg-black/95'
                  : 'bg-white/95'
              } backdrop-blur-md flex flex-col justify-center items-center text-center md:hidden`}
            >
              {links.map(({ id, link, label }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: id * 0.1 }}
                  className="w-full"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-80}
                    className={`block px-4 py-6 text-4xl font-medium ${
                      activeSection === link
                        ? 'text-cyan-500'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                    } transition-colors relative group`}
                  >
                    {label}
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-32 transition-all duration-300"
                      whileHover={{ width: '8rem' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
