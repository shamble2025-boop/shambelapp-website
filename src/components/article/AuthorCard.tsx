import { Youtube, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';
import T from '@/components/ui/T';

export default function AuthorCard() {
  return (
    <div className="my-12 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex justify-center items-center gap-4 flex-col sm:flex-row">
      <a 
        href={siteConfig.social.youtube} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-6 py-2.5 bg-orange-500 text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <Youtube className="w-4 h-4" /> <T en="Subscribe" am="ይመዝገቡ" />
      </a>
      <a 
        href={siteConfig.androidAppUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-6 py-2.5 bg-accent text-black rounded-full text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <Download className="w-4 h-4" /> <T en="Download App" am="መተግበሪያ አውርዱ" />
      </a>
    </div>
  );
}