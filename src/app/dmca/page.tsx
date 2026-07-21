export const metadata = { title: 'DMCA | Shambel App' };
import T from '@/components/ui/T';
export default function DmcaPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-8"><T en="DMCA Policy" am="ዲኤምሲኤ ፖሊሲ" /></h1>
      <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6">
        <p><T en="We respect the intellectual property rights of others. If you believe that your content has been copied in a way that constitutes copyright infringement, please contact us." am="የሌሎችን የአእምሮ ንብረት መብት እናከብራለን።" /></p>
      </div>
    </main>
  );
}