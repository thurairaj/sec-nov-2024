'use client';

import { createContext, useContext, useState } from 'react';

// Create ThemeContext
const LanguageContext = createContext();

// ThemeProvider Component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('malay');

  const toggleLanguage = () => {
    setLanguage((prevTheme) => (prevTheme === 'malay' ? 'english' : 'malay'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
