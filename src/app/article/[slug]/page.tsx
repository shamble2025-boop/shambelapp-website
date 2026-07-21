import { getArticleBySlug, getRelatedArticles } from '@/services/api.service';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Eye, Clock, Home } from 'lucide-react';
import ShareButtons from '@/components/article/ShareButtons';
import CommentSection from '@/components/article/CommentSection';
import ArticleCard from '@/components/ui/ArticleCard';
import T from '@/components/ui/T';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found | Shambel App' };
  return {
    title: `${article.title_en} | Shambel App`,
    description: article.excerpt_en,
    openGraph: { title: article.title_en, description: article.excerpt_en, images: [{ url: article.thumbnail }] },
  };
}

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-500">Article not found.</div>;
  const related = await getRelatedArticles(article.category_en, article.id);

  const shareUrl = `https://shambelapp.com/article/${article.slug}`;
  const shareTitle = article.title_en;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: article.title_en, image: [article.thumbnail], datePublished: article.date_en, author: [{ '@type': 'Person', name: article.author }] }) }} />
      
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-accent flex items-center gap-1"><Home className="w-3 h-3" /> <T en="Home" am="መነሻ" /></Link> /
        <Link href={`/category/${article.category_en.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-accent"><T en={article.category_en} am={article.category_am} /></Link>
      </nav>

      <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white leading-tight tracking-tight">
        <T en={article.title_en} am={article.title_am} />
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mt-4"><T en={article.excerpt_en} am={article.excerpt_am} /></p>

      <div className="flex items-center justify-between flex-wrap gap-4 mt-8 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
          <span className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black font-bold">{article.author[0]}</div>
            {article.author}
          </span>
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <T en={article.date_en} am={article.date_am} /></span>
          <span className="flex items-center gap-2"><Eye className="w-4 h-4" /> {article.views.toLocaleString()}</span>
          <span className="hidden sm:flex items-center gap-2"><Clock className="w-4 h-4" /> <T en={`${article.readingTime} min`} am={`${article.readingTime} ደቂቃ`} /></span>
        </div>
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>

      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-soft my-8">
        <Image src={article.thumbnail} alt={article.title_en} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
      </div>

      <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        <T en={article.content_en || ''} am={article.content_am || ''} />
      </div>

      <div className="my-12 h-32 w-full bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400 text-xs font-mono uppercase tracking-widest"><T en="Advertisement Space" am="የማስታወቂያ ቦታ" /></span>
      </div>

      <CommentSection articleId={article.id} />

      {related.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-6"><T en="Related Articles" am="ተዛማጅ መጣጥፎች" /></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => <ArticleCard key={rel.id} article={rel} />)}
          </div>
        </section>
      )}
    </article>
  );
}