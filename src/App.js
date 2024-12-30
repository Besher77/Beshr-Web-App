import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const MainContent = () => {
  const { isDarkMode, language, direction } = useTheme();

  React.useEffect(() => {
    // Apply theme and language classes to root elements
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;

    // Apply smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add theme transition class
    document.documentElement.classList.add('theme-transition');

    // Handle image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.classList.add('loading');
      img.onload = () => {
        img.classList.remove('loading');
        img.classList.add('loaded');
      };
    });

    return () => {
      // Cleanup
      document.documentElement.classList.remove('theme-transition');
    };
  }, [isDarkMode, language, direction]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-b from-black via-black to-gray-800 text-white' 
        : 'bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-800'
    } ${language === 'ar' ? 'font-arabic' : 'font-english'}`}
    dir={direction}
    >
      <Navbar />
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Home />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
