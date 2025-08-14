// src/contexts/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  const [languageCode, setLanguageCode] = useState('en');

  const languages = [
    { name: 'Albanian', code: 'sq' },
    { name: 'English', code: 'en' },
    { name: 'Turkish', code: 'tr' }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const lang = languages.find(l => l.name === savedLanguage);
      if (lang) {
        setLanguage(lang.name);
        setLanguageCode(lang.code);
      }
    }
  }, []);

  const changeLanguage = (selectedLanguage) => {
    const lang = languages.find(l => l.name === selectedLanguage);
    if (lang) {
      setLanguage(lang.name);
      setLanguageCode(lang.code);
      localStorage.setItem('selectedLanguage', lang.name);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, languageCode, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};