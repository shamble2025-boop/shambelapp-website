'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface UIContextType {
  isSearchOpen: boolean; openSearch: () => void; closeSearch: () => void;
  isMobileMenuOpen: boolean; toggleMobileMenu: () => void;
}
const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openSearch = () => { setIsSearchOpen(true); document.body.style.overflow = 'hidden'; };
  const closeSearch = () => { setIsSearchOpen(false); document.body.style.overflow = 'auto'; };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && closeSearch();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <UIContext.Provider value={{ isSearchOpen, openSearch, closeSearch, isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </UIContext.Provider>
  );
};
export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within UIProvider');
  return context;
};