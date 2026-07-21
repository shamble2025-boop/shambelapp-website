import { ArticleCardSkeleton, HeroSkeleton } from '@/components/ui/Skeletons';

export default function Loading() {
  return (
    <main className="min-h-screen pb-20">
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          <HeroSkeleton />
          <div className="lg:col-span-3 flex lg:block">
            <div className="h-[450px] w-full bg-gray-100 dark:bg-gray-900 rounded-2xl"></div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {[...Array(6)].map((_, i) => <ArticleCardSkeleton key={i} />)}
        </div>
      </section>
    </main>
  );
}