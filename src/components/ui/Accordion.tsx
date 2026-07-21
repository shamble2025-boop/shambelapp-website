'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <button
        className="flex w-full justify-between items-center py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-primary dark:text-white">{title}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}