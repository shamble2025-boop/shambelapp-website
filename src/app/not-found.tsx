import Link from 'next/link';
import T from '@/components/ui/T';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold text-accent tracking-tighter">404</h1>
      <h2 className="text-2xl font-bold text-primary dark:text-white mt-4 mb-2"><T en="Page Not Found" am="ገጽ አልተገኘም" /></h2>
      <p className="text-gray-500 mb-8"><T en="The page you are looking for doesn't exist or has been moved." am="እየፈለጉት ያሉት ገጽ የለም ወይም ተንቅልቋል።" /></p>
      <Link href="/" className="px-6 py-3 bg-primary text-white dark:bg-accent dark:text-black rounded-full font-bold hover:opacity-80 transition-opacity">
        <T en="Back to Home" am="ወደ መነሻ ተመለስ" />
      </Link>
    </main>
  );
}