export const metadata = { title: 'Cookie Policy | Shambel App' };
import T from '@/components/ui/T';
export default function CookiePolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-8"><T en="Cookie Policy" am="የኩኪ ፖሊሲ" /></h1>
      <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6">
        <p><T en="This website uses cookies to enhance your browsing experience and analyze site traffic." am="ይህ ድረ-ገጽ የአሰሳን ልምድዎን ለማሻሻል ኩኪዎችን ይጠቀማል።" /></p>
      </div>
    </main>
  );
}