'use client';
import { useState, useEffect } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 z-50">
      <div 
        className="h-full bg-accent transition-all duration-150 ease-out" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}