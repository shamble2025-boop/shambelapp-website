import { getAllArticles } from '@/services/api.service';
import ArticleCard from '@/components/ui/ArticleCard';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import T from '@/components/ui/T';

export const metadata = { title: 'All Tutorials | Shambel App' };

export default async function ArticlesPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { articles, totalPages } = await getAllArticles(page, 6);

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> <T en="Back to Home" am="ወደ መነሻ ተመለስ" />
      </Link>
      <div className="flex items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-900 pb-4">
        <h1 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight"><T en="All Tutorials" am="ሁሉም ማስተማሪያዎች" /></h1>
      </div>
      
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center py-20"><T en="No articles found." am="ምንም መጣጥፍ አልተገኘም።" /></p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              {page > 1 && (
                <Link href={`/articles?page=${page - 1}`} className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-primary-light rounded-full text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-black transition-colors">
                  <ChevronLeft className="w-4 h-4" /> <T en="Prev" am="ቀዳሚ" />
                </Link>
              )}
              <span className="text-gray-500 text-sm font-medium"><T en="Page" am="ገጽ" /> {page} / {totalPages}</span>
              {page < totalPages && (
                <Link href={`/articles?page=${page + 1}`} className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-primary-light rounded-full text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-accent dark:hover:text-black transition-colors">
                  <T en="Next" am="ቀጣይ" /> <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
}