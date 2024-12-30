import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';
import { Link } from 'react-scroll';

const Footer = () => {
  const { isDarkMode, language, direction } = useTheme();
  const t = translations[language]?.footer;

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/beshrqashar',
      color: 'hover:text-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/beshrqashar',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/beshrqashar',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/beshrqashar',
      color: 'hover:text-pink-500'
    }
  ];

  const footerLinks = [
    { name: t?.links?.about, to: 'about' },
    { name: t?.links?.portfolio, to: 'portfolio' },
    { name: t?.links?.contact, to: 'contact' }
  ];

  return (
    <footer
      className={`relative w-full py-12 overflow-hidden ${
        isDarkMode
          ? 'bg-gradient-to-b from-gray-800 to-black text-white'
          : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'
      }`}
      dir={direction}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient layer */}
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
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(56,189,248,0.03)_0%,rgba(59,130,246,0.02)_25%,transparent_50%)]"
        />

        {/* Secondary animated gradients */}
        <motion.div
          animate={{
            x: [-20, 20],
            y: [-10, 10],
            rotate: [0, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`absolute top-0 left-0 w-full h-full opacity-20 ${
            isDarkMode
              ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1)_0%,transparent_50%)]'
              : 'bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08)_0%,transparent_50%)]'
          }`}
        />

        {/* Animated mesh grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px), 
                           linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.5,
        }} />

        {/* Glowing orbs */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            initial={{
              x: `${30 + i * 40}%`,
              y: `${40 + i * 20}%`,
              scale: 1,
            }}
            animate={{
              x: `${30 + i * 40 + (Math.random() * 5 - 2.5)}%`,
              y: `${40 + i * 20 + (Math.random() * 5 - 2.5)}%`,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className={`absolute w-48 h-48 rounded-full opacity-10 ${
              i === 0
                ? 'bg-cyan-500'
                : 'bg-blue-500'
            }`}
            style={{
              filter: 'blur(40px)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Logo and Social Links */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
          >
            Beshr Qashar
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                } ${link.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-8 mb-8"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className={`text-sm cursor-pointer transition-colors duration-300 ${
                isDarkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-center text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {new Date().getFullYear()} {t?.copyright}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
