import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [direction, setDirection] = useState(language === 'ar' ? 'rtl' : 'ltr');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
    setDirection(language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      language,
      toggleLanguage,
      direction
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
