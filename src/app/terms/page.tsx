export const metadata = { title: 'Terms & Conditions | Shambel App' };
import T from '@/components/ui/T';
export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-8"><T en="Terms & Conditions" am="ውሎች እና ሁኔታዎች" /></h1>
      <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 space-y-6">
        <p><T en="By accessing this website, you agree to our terms of service. All content provided is for educational purposes only." am="ይህን ድረ-ገጽ በመጠቀምዎ የአገልግሎት ውሎቻችንን ይስማማሉ።" /></p>
      </div>
    </main>
  );
}