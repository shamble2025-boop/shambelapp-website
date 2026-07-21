'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'am';

interface AppContextType {
  isSearchOpen: boolean; openSearch: () => void; closeSearch: () => void;
  isMobileMenuOpen: boolean; toggleMobileMenu: () => void;
  darkMode: boolean; toggleDarkMode: () => void;
  lang: Lang; toggleLanguage: () => void; setLang: (lang: Lang) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('lang') as Lang;
    if (savedTheme === 'dark') setDarkMode(true);
    if (savedLang) setLangState(savedLang);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    if (typeof document !== 'undefined') {
      if (newLang === 'am') document.documentElement.classList.add('am');
      else document.documentElement.classList.remove('am');
    }
  };

  const toggleLanguage = () => setLang(lang === 'en' ? 'am' : 'en');
  const openSearch = () => { setIsSearchOpen(true); document.body.style.overflow = 'hidden'; };
  const closeSearch = () => { setIsSearchOpen(false); document.body.style.overflow = 'auto'; };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && closeSearch();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <AppContext.Provider value={{ isSearchOpen, openSearch, closeSearch, isMobileMenuOpen, toggleMobileMenu, darkMode, toggleDarkMode, lang, toggleLanguage, setLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};