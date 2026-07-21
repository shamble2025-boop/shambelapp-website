import { LifeBuoy, BookOpen, UserCircle, Bug, Lightbulb, Mail } from 'lucide-react';
import Link from 'next/link';
import T from '@/components/ui/T';
import Accordion from '@/components/ui/Accordion';

export const metadata = { title: 'Help Center | Shambel App' };

export default function HelpPage() {
  const categories = [
    { icon: BookOpen, title_en: "Website Usage", title_am: "የድረ-ገጽ አጠቃቀም", desc_en: "Learn how to navigate and use all features.", desc_am: "አንድሮይድ እና ዌብ ኮርስ እንዴት እንደሚወስዱ ይማሩ።", href: "/articles" },
    { icon: UserCircle, title_en: "Account Help", title_am: "የመለያ እገዛ", desc_en: "Manage your profile and settings.", desc_am: "መለያዎን እንዴት ማስተዳደር እንደሚቻል ይማሩ።", href: "/about" },
    { icon: Bug, title_en: "Bug Reporting", title_am: "የችግር ሪፖርት", desc_en: "Report issues to help us improve.", desc_am: "ችግሮችን ያሳውቁን።", href: "/contact" },
    { icon: Lightbulb, title_en: "Feature Requests", title_am: "የባህሪ ጥያቄዎች", desc_en: "Suggest new features or content.", desc_am: "አዲስ ባህሪያትን ይጠይቁ።", href: "/contact" },
  ];

  const faqs = [
    { q_en: "How do I access premium tutorials?", q_am: "ፕሪሚየም ማስተማሪያዎችን እንዴት ማግኘት እችላለሁ?", a_en: "You can access all premium tutorials by subscribing to our newsletter or visiting the articles section.", a_am: "ሁሉንም ፕሪሚየም ማስተማሪያዎች በአርቲክሎች ክፍል በመጎብኘት ማግኘት ይችላሉ።" },
    { q_en: "Do I need an account to read articles?", q_am: "መጣጥፎችን ለማንበብ መለያ ያስፈልገኛል?", a_en: "No, you can read all articles for free without creating an account.", a_am: "አይ፣ ሁሉንም መጣጥፎች መለያ ሳይፈጥሩ በነፃ ማንበብ ይችላሉ።" },
    { q_en: "How do I report a technical issue?", q_am: "የቴክኒክ ችግር እንዴት ሪፖርት አደርጋለሁ?", a_en: "Please use our contact form with the subject 'Bug Report' to notify our team.", a_am: "ቡድናችንን ለማሳወቅ የእውቂያ ቅጹን ይጠቀሙ።" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <LifeBuoy className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight mb-4">
          <T en="Help Center" am="የእገዛ ማዕከል" />
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          <T en="Find answers to your questions, learn how to use the platform, and get support." am="ለጥያቄዎችዎ መልስ ያግኙ፣ መድረኩን እንዴት እንደሚጠቀሙ ይማሩ እና ድጋፍ ያግኙ።" />
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {categories.map((cat, i) => (
          <Link key={i} href={cat.href} className="bg-white dark:bg-primary-light p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 hover:border-accent transition-colors group">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
              <cat.icon className="w-6 h-6 text-accent group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-primary dark:text-white mb-2"><T en={cat.title_en} am={cat.title_am} /></h3>
            <p className="text-sm text-gray-500 dark:text-gray-400"><T en={cat.desc_en} am={cat.desc_am} /></p>
          </Link>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-8 text-center"><T en="Frequently Asked Questions" am="ተደጋጋሚ ጥያቄዎች" /></h2>
        <div className="border-t border-gray-100 dark:border-gray-800">
          {faqs.map((faq, i) => (
            <Accordion key={i} title={faq.q_en}>
              {faq.a_en}
            </Accordion>
          ))}
        </div>
      </div>

      {/* Support Contact CTA */}
      <div className="bg-primary dark:bg-primary-light rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4"><T en="Still Need Help?" am="አሁንም እገዛ ያስፈልግዎታል?" /></h3>
          <p className="text-gray-400 mt-2 max-w-lg mx-auto mb-8"><T en="Our support team is ready to assist you with any inquiries." am="የድጋፍ ቡድናችን ለማንኛውም ጥያቄ ሊረዳዎት ዝግጁ ነው።" /></p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-black rounded-full font-bold hover:bg-accent-dark transition-colors">
            <Mail className="w-5 h-5" /> <T en="Contact Support" am="ድጋፍ ያግኙ" />
          </Link>
        </div>
      </div>
    </main>
  );
}