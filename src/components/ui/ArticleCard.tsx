import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Article } from '@/types';
import T from '@/components/ui/T';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={article.youtubeId ? `/videos/${article.slug}` : `/article/${article.slug}`} className="minimal-card block group">
      <div className="relative w-full h-56 overflow-hidden rounded-xl mb-4">
        <Image src={article.thumbnail} alt={article.title_en} fill className="card-img object-cover transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        {article.youtubeId && (
          <div className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1 z-10">
            <Play className="w-3 h-3" fill="white" /> <T en="Video" am="ቪዲዮ" />
          </div>
        )}
      </div>
      <span className="text-xs font-bold text-accent uppercase tracking-wider">
        <T en={article.category_en} am={article.category_am} />
      </span>
      <h4 className="card-title text-xl font-bold text-primary dark:text-white mt-2 transition-colors">
        <T en={article.title_en} am={article.title_am} />
      </h4>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        <T en={article.excerpt_en} am={article.excerpt_am} />
      </p>
      <div className="flex items-center gap-4 mt-4 text-gray-400 text-xs">
        <span>{article.author}</span>
        <span>•</span>
        <span><T en={article.date_en} am={article.date_am} /></span>
      </div>
    </Link>
  );
}