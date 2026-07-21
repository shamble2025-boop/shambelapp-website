'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import T from '@/components/ui/T';

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useApp();
  const [query, setQuery] = useState('');
  const router = useRouter();

  if (!isSearchOpen) return null;

  const handleSearch = (e: React.FormEvent | string) => {
    if (typeof e === 'string') {
      router.push(`/search?q=${encodeURIComponent(e)}`);
    } else {
      e.preventDefault();
      if (!query.trim()) return;
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
    closeSearch();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-xl opacity-100 transition-opacity duration-300">
      <div className="max-w-3xl mx-auto pt-24 px-4">
        <form onSubmit={(e) => handleSearch(e)} className="flex items-center border-b-2 border-accent pb-4">
          <Search className="w-8 h-8 text-accent mr-4" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tutorials, tips, tech news..." 
            className="w-full bg-transparent text-2xl md:text-4xl font-bold text-primary dark:text-white focus:outline-none placeholder:text-gray-300 dark:placeholder:text-gray-700"
            autoFocus
          />
          <button type="submit" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors mr-2">
            <Search className="w-8 h-8 text-gray-500" />
          </button>
          <button type="button" onClick={closeSearch} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-8 h-8 text-gray-500" />
          </button>
        </form>
        <div className="mt-8">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4"><T en="Trending Searches" am="ታዋቂ ፍለጋዎች" /></p>
          <div className="flex flex-wrap gap-2">
            {['ChatGPT', 'Android 14', 'Gemini AI', 'Cyber Security'].map(tag => (
              <button 
                key={tag} 
                onClick={() => handleSearch(tag)} 
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-black transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}