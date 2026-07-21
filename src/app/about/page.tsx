import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Users, Eye, Award, Target, Rocket, Code, Smartphone, Server } from 'lucide-react';
import T from '@/components/ui/T';
import Accordion from '@/components/ui/Accordion';
import { siteConfig } from '@/config/site';

export const metadata = { title: 'About Us | Shambel App' };

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "50K+", label_en: "Subscribers", label_am: "ደንበኞች" },
    { icon: Eye, value: "5M+", label_en: "Total Views", label_am: "ጠቅላላ እይታዎች" },
    { icon: Award, value: "100+", label_en: "Tutorials", label_am: "ማስተማሪያዎች" },
  ];

  const expertise = [
    { icon: Code, title_en: "Web Development", title_am: "የድረ-ገጽ እድገት", desc_en: "React, Node.js, Next.js, TypeScript", desc_am: "ሬአክት፣ ኖድ.js፣ ኔክስት.js፣ ታይፕስክሪፕት" },
    { icon: Smartphone, title_en: "Android App", title_am: "አንድሮይድ መተግበሪያ", desc_en: "Java, Kotlin, Android Studio", desc_am: "ጃቫ፣ ኮትሊን፣ አንድሮይድ ስቱዲዮ" },
    { icon: Server, title_en: "Cyber Security", title_am: "ሳይበር ደህንነት", desc_en: "Network Security, Ethical Hacking", desc_am: "የኔትወርክ ደህንነት፣ በጎ አላማ ሃኪንግ" },
  ];

  const faqs = [
    { q_en: "What is Shambel App?", q_am: "ሻምበል አፕ ምንድን ነው?", a_en: "Shambel App is a premium technology education platform dedicated to helping you learn technology, grow faster, and build your future.", a_am: "ሻምበል አፕ ቴክኖሎጂን ለመማር፣ ፈጣን ለመማር እና የእርስዎን የወያጅ ለመገንባት የተወሰነ የቴክኖሎጂ ትምህርት መድረክ ነው።" },
    { q_en: "How often do you post new content?", q_am: "ምን ያህል ጊዜ አዲስ ይዘት ያስቀምጣሉ?", a_en: "We aim to post new tutorials every week, ensuring high-quality and up-to-date content.", a_am: "ከፍተኛ ጥራት ያለው እና ወቅታዊ ይዘት መሆኑን አረጋግጦ በየሳምንቱ አዲስ ማስተማሪያዎችን ለማስቀመጥ እንሞክራለን።" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-white tracking-tight leading-tight mb-6">
            <T en="Hi, I'm Shambel" am="ሰላም፣ እኔ ሻምበል ነኝ" />
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
            <T en="A Software Engineer, Content Creator, and Tech Enthusiast dedicated to making technology accessible to everyone." am="ሶፍትዌር ምህንድስና፣ ይዘት ፈጣሪ እና ቴክኖሎጂን ለሁሉም ሰው ለማዳረስ የታቀደ የቴክ አድናቂ።" />
          </p>
          <Link href={siteConfig.social.youtube} target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold hover:opacity-80 transition-opacity">
            <Youtube className="w-5 h-5" /> <T en="Visit YouTube Channel" am="የዩቲዩብ ቻናል ይጎብኙ" />
          </Link>
        </div>
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Shambel"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-8 mb-20 border-y border-gray-100 dark:border-gray-900 py-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-2">{stat.value}</h3>
            <p className="text-gray-500 dark:text-gray-400"><T en={stat.label_en} am={stat.label_am} /></p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-50 dark:bg-primary-light p-8 rounded-2xl">
          <Target className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-4"><T en="Our Mission" am="ዓላማችን" /></h3>
          <p className="text-gray-600 dark:text-gray-300"><T en="To provide high-quality, accessible technology education that empowers the next generation of developers and tech enthusiasts." am="የሚቀጥለውን ትውልድ ዲቨሎፐሮች እና የቴክ አድናቂዎች ለማበረታታት ከፍተኛ ጥራት ያለው እና ሊደረስበት የሚችል የቴክኖሎጂ ትምህርት መስጠት።" /></p>
        </div>
        <div className="bg-gray-50 dark:bg-primary-light p-8 rounded-2xl">
          <Rocket className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-4"><T en="Our Vision" am="ራዕያችን" /></h3>
          <p className="text-gray-600 dark:text-gray-300"><T en="To become the leading technology education platform in Africa, bridging the digital divide." am="በአፍሪካ ውስጥ የቴክኖሎጂ ትምህርት መድረክ ሆኖ የዲጂታል ክፍተትን ለመሸፈን መሆን።" /></p>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="mb-20">
        <h2 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-12 text-center"><T en="Areas of Expertise" am="የብቃት ዘርፎች" /></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((exp, i) => (
            <div key={i} className="bg-white dark:bg-primary-light p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
              <exp.icon className="w-8 h-8 text-accent mb-4" />
              <h4 className="text-xl font-bold text-primary dark:text-white mb-2"><T en={exp.title_en} am={exp.title_am} /></h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm"><T en={exp.desc_en} am={exp.desc_am} /></p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight mb-8 text-center"><T en="Frequently Asked Questions" am="ተደጋጋሚ ጥያቄዎች" /></h2>
        <div className="border-t border-gray-100 dark:border-gray-800">
          {faqs.map((faq, i) => (
            <Accordion key={i} title={faq.q_en}>
              {faq.a_en}
            </Accordion>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary dark:bg-primary-light rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"><T en="Ready to Start Learning?" am="ለመማር ዝግጁ ነዎት?" /></h3>
          <p className="text-gray-400 mt-2 max-w-lg mx-auto mb-8"><T en="Join thousands of learners and take your tech skills to the next level." am="በሺዎች የሚቆጠሩ ተማሪዎችን ይቀላቁ እና የቴክ ችሎታዎን ወደ ቀጣዩ ደረጃ ያድርሱ።" /></p>
          <Link href="/articles" className="px-8 py-3 bg-accent text-black rounded-full font-bold hover:bg-accent-dark transition-colors">
            <T en="Explore Tutorials" am="ማስተማሪያዎችን ያስሱ" />
          </Link>
        </div>
      </div>
    </main>
  );
}