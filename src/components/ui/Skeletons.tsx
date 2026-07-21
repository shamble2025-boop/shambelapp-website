export const ArticleCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="w-full h-56 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-2"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="lg:col-span-9 animate-pulse">
    <div className="w-full h-[450px] bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
  </div>
);