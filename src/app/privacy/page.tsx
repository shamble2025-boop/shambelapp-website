export const metadata = { title: 'Privacy Policy | Shambel App' };
import T from '@/components/ui/T';
export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-8"><T en="Privacy Policy" am="የግላዊነት ፖሊሲ" /></h1>
      <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6">
        <p><T en="We respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information." am="የእርስዎን ግላዊነት እና የግል መረጃዎችን በመጠበቅ ላይ እንታክታለን።" /></p>
        <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4"><T en="Information We Collect" am="የምንሰበስበው መረጃ" /></h2>
        <p><T en="We collect information you provide directly to us, such as your email address when you subscribe to our newsletter. We also collect analytical data to improve user experience." am="ለምሳሌ ለጋዜጣችን ሲመዘገቡ የሚሰጡትን የኢሜል አድራሻ እና ሌሎች የተወሰኑ መረጃዎችን እንሰበስባለን።" /></p>
      </div>
    </main>
  );
}