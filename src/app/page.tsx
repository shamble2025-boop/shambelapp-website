import { getFeaturedArticles, getLatestArticles, getTrendingArticles, getPopularArticles } from '@/services/api.service';
import HeroSlider from '@/components/home/HeroSlider';
import ArticleCard from '@/components/ui/ArticleCard';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { ArrowRight, Flame, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import T from '@/components/ui/T';

export default async function HomePage() {
  const [featured, latest, trending, popular] = await Promise.all([
    getFeaturedArticles(),
    getLatestArticles(),
    getTrendingArticles(),
    getPopularArticles()
  ]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          <HeroSlider slides={featured} />
          <div className="lg:col-span-3 flex lg:block">
            <div className="h-24 lg:h-[450px] md:h-[350px] w-full bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex items-center justify-center">
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest"><T en="Ad Space" am="የማስታወቂያ ቦታ" /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-gray-900 pb-4">
          <Flame className="text-accent w-6 h-6" />
          <h3 className="text-2xl font-extrabold text-primary dark:text-white tracking-tight"><T en="Trending Now" am="አሁን በተወዳነበት" /></h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trending.map((article) => (
            <Link href={`/article/${article.slug}`} key={article.id} className="w-full group block bg-white dark:bg-primary-light rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 overflow-hidden card-hover">
              <div className="relative w-full h-40 overflow-hidden">
                <Image src={article.thumbnail} alt={article.title_en} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="300px" />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-accent uppercase"><T en={article.category_en} am={article.category_am} /></span>
                <h4 className="font-bold text-primary dark:text-white mt-1 group-hover:text-accent transition-colors text-sm leading-snug"><T en={article.title_en} am={article.title_am} /></h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-900 pb-4">
            <h3 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight"><T en="Latest Tutorials" am="የአሁኑ ማስተማሪያዎች" /></h3>
            <Link href="/articles" className="text-accent text-sm font-bold hover:underline flex items-center gap-1">
              <T en="View All" am="ሁሉንም ይመልከቱ" /> <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {latest.map((article) => <ArticleCard key={article.id} article={article} />)}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-10 border-b border-gray-100 dark:border-gray-900 pb-4">
            <Eye className="text-accent w-6 h-6" />
            <h3 className="text-2xl font-extrabold text-primary dark:text-white tracking-tight"><T en="Most Popular" am="በጣም ታዋቂ" /></h3>
          </div>
          <div className="space-y-6">
            {popular.map((article, index) => (
              <Link href={`/article/${article.slug}`} key={article.id} className="flex items-start gap-4 group">
                <span className="text-3xl font-extrabold text-gray-100 dark:text-gray-800 group-hover:text-accent transition-colors">0{index + 1}</span>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase"><T en={article.category_en} am={article.category_am} /></span>
                  <h4 className="font-bold text-primary dark:text-white group-hover:text-accent transition-colors text-sm leading-snug mt-1"><T en={article.title_en} am={article.title_am} /></h4>
                  <p className="text-xs text-gray-400 mt-1"><T en={article.date_en} am={article.date_am} /> • {article.views.toLocaleString()} <T en="views" am="እይታዎች" /></p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 h-64 w-full bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex items-center justify-center">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-widest"><T en="Ad Space (Sidebar)" am="የማስታወቂያ ቦታ" /></span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <h3 className="text-xl font-extrabold text-primary dark:text-white tracking-tight mb-6 text-center"><T en="Browse by Topic" am="በርዕስ ያስሱ" /></h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { en: 'Artificial Intelligence', am: 'ሰው ሰራሽ አስተውቀር' },
            { en: 'Android', am: 'አንድሮይድ' },
            { en: 'Cyber Security', am: 'ሳይበር ደህንነት' },
            { en: 'Tech News', am: 'የቴክ ዜና' },
            { en: 'ChatGPT & Gemini', am: 'ቻትጂፒቲ እና ጄሚኒ' },
            { en: 'Apps & Tips', am: 'መተግበሪያዎች እና ጠቋሚዎች' }
          ].map(topic => (
            <Link key={topic.en} href={`/category/${topic.en.toLowerCase().replace(/\s/g, '-')}`} className="px-5 py-2.5 bg-gray-100 dark:bg-primary-light rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-black transition-colors">
              <T en={topic.en} am={topic.am} />
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="bg-primary dark:bg-primary-light rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"><T en="Join the Newsletter" am="ዜና ደብዳቤን ይቀላቹ" /></h3>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto"><T en="Get the best tech tutorials, AI tools, and security tips delivered straight to your inbox." am="ምርጥ የቴክኖሎጂ ማስተማሪያዎችን፣ የኤአይ መሳሪያዎችን እና የደህንነት ጠቋሚዎችን በቀጥታ ወደ ኢሜልዎ ይቀበሉ።" /></p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}