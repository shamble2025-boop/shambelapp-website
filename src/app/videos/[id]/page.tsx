import { getVideoById, getRelatedArticles } from '@/services/api.service';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Eye, Clock, Home } from 'lucide-react';
import ShareButtons from '@/components/article/ShareButtons';
import CommentSection from '@/components/article/CommentSection';
import ArticleCard from '@/components/ui/ArticleCard';
import NewsletterForm from '@/components/ui/NewsletterForm';
import T from '@/components/ui/T';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const video = await getVideoById(params.id);
  if (!video) return { title: 'Video Not Found | Shambel App' };
  return {
    title: `${video.title_en} | Shambel App`,
    description: video.excerpt_en,
    openGraph: { title: video.title_en, description: video.excerpt_en, images: [{ url: video.thumbnail }] },
  };
}

export default async function VideoDetailPage({ params }: { params: { id: string } }) {
  const video = await getVideoById(params.id);
  if (!video) return <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-500">Video not found.</div>;

  // Fetch related articles for the "Related Posts" section
  const related = await getRelatedArticles(video.category_en, video.id);

  const shareUrl = `https://shambelapp.com/videos/${video.slug}`;
  const shareTitle = video.title_en;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'VideoObject', name: video.title_en, thumbnailUrl: video.thumbnail, uploadDate: video.date_en, author: [{ '@type': 'Person', name: video.author }] }) }} />
      
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-accent flex items-center gap-1"><Home className="w-3 h-3" /> <T en="Home" am="መነሻ" /></Link> /
        <Link href="/videos" className="hover:text-accent"><T en="Video Tutorials" am="የቪዲዮ ማስተማሪያዎች" /></Link>
      </nav>

      <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white leading-tight tracking-tight">
        <T en={video.title_en} am={video.title_am} />
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mt-4"><T en={video.excerpt_en} am={video.excerpt_am} /></p>

      <div className="flex items-center justify-between flex-wrap gap-4 mt-8 pb-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
          <span className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black font-bold">{video.author[0]}</div>
            {video.author}
          </span>
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <T en={video.date_en} am={video.date_am} /></span>
          <span className="flex items-center gap-2"><Eye className="w-4 h-4" /> {video.views.toLocaleString()}</span>
          <span className="hidden sm:flex items-center gap-2"><Clock className="w-4 h-4" /> <T en={`${video.readingTime} min`} am={`${video.readingTime} ደቂቃ`} /></span>
        </div>
        <ShareButtons url={shareUrl} title={shareTitle} />
      </div>

      {/* Render YouTube Iframe Content */}
            <div 
        className="prose dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:aspect-video [&_iframe]:rounded-2xl [&_iframe]:overflow-hidden [&_iframe]:my-4"
        dangerouslySetInnerHTML={{ __html: video.content_en || '' }} 
      />

      {/* In-Article Ad */}
      <div className="my-12 h-32 w-full bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400 text-xs font-mono uppercase tracking-widest"><T en="Advertisement Space" am="የማስታወቂያ ቦታ" /></span>
      </div>

      <CommentSection articleId={video.id} />

      {/* Related Articles Section */}
      {related.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-6"><T en="Related Tutorials" am="ተዛማጅ ማስተማሪያዎች" /></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {related.map((rel) => <ArticleCard key={rel.id} article={rel} />)}
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="mt-16">
        <div className="bg-primary dark:bg-primary-light rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"><T en="Join the Newsletter" am="ዜና ደብዳቤን ይቀላቹ" /></h3>
            <p className="text-gray-400 mt-2 max-w-lg mx-auto"><T en="Get the best tech tutorials, AI tools, and security tips delivered straight to your inbox." am="ምርጥ የቴክኖሎጂ ማስተማሪያዎችን፣ የኤአይ መሳሪያዎችን እና የደህንነት ጠቋሚዎችን በቀጥታ ወደ ኢሜልዎ ይቀበሉ።" /></p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </article>
  );
}