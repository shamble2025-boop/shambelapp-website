export default function Loading() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-6"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-full mb-4"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-8"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/6"></div>
      </div>

      <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-800 rounded-2xl mb-8"></div>

      <div className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
      </div>
    </main>
  );
}