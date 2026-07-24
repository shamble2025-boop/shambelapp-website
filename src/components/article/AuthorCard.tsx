import Image from 'next/image';
import { Youtube, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';
import T from '@/components/ui/T';

export default function AuthorCard() {
  return (
    <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent">
        <Image 
          src="/shambel.jpg" 
          alt="Shambel" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="flex-grow text-center md:text-left min-w-0">
        <h3 className="text-xl font-bold text-primary dark:text-white"><T en="Shambel" am="ሻምበል" /></h3>
        <p className="text-accent font-bold text-sm mb-2"><T en="Tech Educator" am="የቴክ አስተማሪ" /></p>
        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
          <Youtube className="w-4 h-4 text-orange-500" />
          <span><T en="400K+ YouTube Subscribers" am="400K+ የዩቲዩብ ደንበኞች" /></span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          <T en="I am Shambel. I am a technology content creator who has spent several years sharing useful tutorials about smartphone usage, artificial intelligence, and mobile applications on YouTube and Facebook." am="እኔ ሻምበል ነኝ። በዩቲዩብ እና ፌስቡክ ላይ ስለ ስማርትፎን አጠቃቀም፣ ሰው ሰራሽ አስተውቀር እና የሞባይል መተግበሪያዎች ጠቃሚ ማስተማሪያዎችን በማጋራት ብዙ ዓመታት ያሳለፍኩ የቴክኖሎጂ ይዘት ፈጣሪ ነኝ።" />
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
        <a 
          href={siteConfig.social.youtube} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <Youtube className="w-5 h-5" /> <T en="Subscribe" am="ይመዝገቡ" />
        </a>
        <a 
          href={siteConfig.androidAppUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 bg-accent text-black rounded-full font-bold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" /> <T en="Download App" am="መተግበሪያ አውርዱ" />
        </a>
      </div>
    </div>
  );
}