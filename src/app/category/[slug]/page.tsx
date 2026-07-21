import { getLatestArticles } from '@/services/api.service';
import ArticleCard from '@/components/ui/ArticleCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import T from '@/components/ui/T';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return { title: `${title} Tutorials | Shambel App` };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const allArticles = await getLatestArticles();
  const articles = allArticles.filter(a => a.category_en.toLowerCase().replace(/\s/g, '-') === params.slug);

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> <T en="Back to Home" am="ወደ መነሻ ተመለስ" />
      </Link>
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-12 capitalize">
        {params.slug.split('-').join(' ')}
      </h1>
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center py-20"><T en="No articles found in this category yet." am="በዚህ ምድብ ውስጥ እስካሁን ምንም መጣጥፍ አልተገኘም።" /></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
      )}
    </main>
  );
}