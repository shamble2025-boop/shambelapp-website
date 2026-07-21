'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Moon, Sun, ChevronDown, Menu, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import T from '@/components/ui/T';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { openSearch, isMobileMenuOpen, toggleMobileMenu, darkMode, toggleDarkMode, lang, setLang } = useApp();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-soft' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-colors">
            <span className="text-white dark:text-black font-bold">S</span>
          </div>
          <span className="text-lg font-bold text-black dark:text-white tracking-tight">Shambel App</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-accent transition-colors"><T en="Home" am="መነሻ" /></Link>
          <Link href="/about" className="hover:text-accent transition-colors"><T en="About" am="ስለ እኛ" /></Link>
          <Link href="/contact" className="hover:text-accent transition-colors"><T en="Contact" am="አግኙን" /></Link>
          <Link href="/help" className="hover:text-accent transition-colors"><T en="Help" am="እገዛ" /></Link>
        </div>

        <div className="flex items-center gap-2 relative">
          <button onClick={openSearch} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Search className="w-[18px] h-[18px] text-gray-700 dark:text-gray-300" />
          </button>
          
          <div className="relative hidden sm:block">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-accent hover:text-black transition-colors">
              {lang === 'en' ? 'EN' : 'AM'} <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-primary-light rounded-xl shadow-glass border border-gray-100 dark:border-gray-800 overflow-hidden">
                <button onClick={() => { setLang('en'); setLangOpen(false); }} className="w-full text-left block px-4 py-2 text-sm text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">English</button>
                <button onClick={() => { setLang('am'); setLangOpen(false); }} className="w-full text-left block px-4 py-2 text-sm text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">አማርኛ (Amharic)</button>
              </div>
            )}
          </div>

          <button onClick={toggleDarkMode} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            {darkMode ? <Sun className="w-[18px] h-[18px] text-accent" /> : <Moon className="w-[18px] h-[18px] text-gray-700" />}
          </button>

          <button onClick={toggleMobileMenu} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden mobile-menu bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-900 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 flex flex-col gap-4 text-base font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-accent transition-colors py-2 border-b border-gray-100 dark:border-gray-800"><T en="Home" am="መነሻ" /></Link>
          <Link href="/about" className="hover:text-accent transition-colors py-2 border-b border-gray-100 dark:border-gray-800"><T en="About" am="ስለ እኛ" /></Link>
          <Link href="/contact" className="hover:text-accent transition-colors py-2 border-b border-gray-100 dark:border-gray-800"><T en="Contact" am="አግኙን" /></Link>
          <Link href="/help" className="hover:text-accent transition-colors py-2"><T en="Help" am="እገዛ" /></Link>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setLang('en')} className={`px-4 py-2 text-xs font-bold rounded-full ${lang === 'en' ? 'bg-accent text-black' : 'bg-gray-100 dark:bg-gray-800'}`}>English</button>
            <button onClick={() => setLang('am')} className={`px-4 py-2 text-xs font-bold rounded-full ${lang === 'am' ? 'bg-accent text-black' : 'bg-gray-100 dark:bg-gray-800'}`}>አማርኛ</button>
          </div>
        </div>
      </div>
    </header>
  );
}