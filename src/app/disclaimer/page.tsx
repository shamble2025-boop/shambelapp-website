export const metadata = { title: 'Disclaimer | Shambel App' };
import T from '@/components/ui/T';
export default function DisclaimerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-8"><T en="Disclaimer" am="ማስጠንቀቂያ" /></h1>
      <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6">
        <p><T en="The information provided is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind." am="የቀረበው መረጃ ለአጠቃላይ መረጃ ብቻ ነው።" /></p>
      </div>
    </main>
  );
}