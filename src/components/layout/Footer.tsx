import Link from 'next/link';
import { Twitter, Youtube, Linkedin, Github } from 'lucide-react';
import T from '@/components/ui/T';
import { siteConfig } from '@/config/site';
import BackToTop from '@/components/ui/BackToTop';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-primary-light border-t border-gray-100 dark:border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white dark:text-black font-bold">S</span>
              </div>
              <span className="text-lg font-bold text-black dark:text-white tracking-tight">Shambel App</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs"><T en="Learn Technology. Grow Faster. Build Your Future. Premium tutorials for the modern user." am="ቴክኖሎጂ ይማሩ። ፈጣን ያደጉ። የእርስዎን የወያጅ ይገንቡ። ለአሁኑ ተጠቃሚ ቆንጆ ማስተማሪያዎች።" /></p>
            <div className="flex gap-3 mt-6">
              <Link href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors text-gray-700 dark:text-gray-300"><Twitter className="w-4 h-4" /></Link>
              <Link href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors text-gray-700 dark:text-gray-300"><Youtube className="w-4 h-4" /></Link>
              <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors text-gray-700 dark:text-gray-300"><Linkedin className="w-4 h-4" /></Link>
              <Link href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors text-gray-700 dark:text-gray-300"><Github className="w-4 h-4" /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm text-primary dark:text-white mb-4 uppercase tracking-wider"><T en="Company" am="ኩባንያ" /></h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-accent transition-colors"><T en="About Us" am="ስለ እኛ" /></Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors"><T en="Contact" am="አግኙን" /></Link></li>
              <li><Link href="/help" className="hover:text-accent transition-colors"><T en="Help Center" am="የእገዛ ማዕከል" /></Link></li>
              <li><Link href="/videos" className="hover:text-accent transition-colors"><T en="Video Tutorials" am="የቪዲዮ ማስተማሪያዎች" /></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-primary dark:text-white mb-4 uppercase tracking-wider"><T en="Legal" am="ህጋዊ" /></h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-accent transition-colors"><T en="Privacy Policy" am="የግላዊነት ፖሊሲ" /></Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors"><T en="Terms of Service" am="የአገልግሎት ውሎች" /></Link></li>
              <li><Link href="/cookie-policy" className="hover:text-accent transition-colors"><T en="Cookie Policy" am="የኩኪ ፖሊሲ" /></Link></li>
              <li><Link href="/disclaimer" className="hover:text-accent transition-colors"><T en="Disclaimer" am="ማስጠንቀቂያ" /></Link></li>
              <li><Link href="/dmca" className="hover:text-accent transition-colors"><T en="DMCA" am="ዲኤምሲኤ" /></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-primary dark:text-white mb-4 uppercase tracking-wider"><T en="Resources" am="ሀብቶች" /></h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/articles" className="hover:text-accent transition-colors"><T en="All Articles" am="ሁሉም መጣጥፎች" /></Link></li>
              <li><Link href="/category/artificial-intelligence" className="hover:text-accent transition-colors"><T en="AI & ChatGPT" am="ኤአይ እና ቻትጂፒቲ" /></Link></li>
              <li><Link href="/category/android" className="hover:text-accent transition-colors"><T en="Android Tips" am="አንድሮይድ ጠቋሚዎች" /></Link></li>
              <li><Link href="/category/cyber-security" className="hover:text-accent transition-colors"><T en="Cyber Security" am="ሳይበር ደህንነት" /></Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Shambel App. <T en="All rights reserved." am="መብቶች በህግ የተጠበቁ ናቸው።" /></p>
          <p className="text-xs text-gray-400"><T en="Made with precision for tech enthusiasts." am="ለቴክኖሎጂ ፍቅረኞች በትክክል የተሰራ።" /></p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}