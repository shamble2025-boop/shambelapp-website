import { searchArticles } from '@/services/api.service';
import ArticleCard from '@/components/ui/ArticleCard';
import T from '@/components/ui/T';

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || '';
  const results = query ? await searchArticles(query) : [];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-2"><T en="Search Results" am="የፍለጋ ዉጤቶች" /></h1>
      <p className="text-gray-500 mb-12"><T en="Found" am="ተገኝቷል" /> {results.length} <T en="results for" am="ውጤቶች ለ" /> "{query}"</p>
      {results.length === 0 ? (
        <div className="text-center py-20"><p className="text-gray-500 text-lg"><T en="No articles found. Try a different search term." am="ምንም መጣጥፍ አልተገኘም። ሌላ የፍለጋ ቃል ይሞክሩ።" /></p></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {results.map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
      )}
    </main>
  );
}