import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Facebook, Video, Target, Rocket, Code, Smartphone, Server } from 'lucide-react';
import T from '@/components/ui/T';
import Accordion from '@/components/ui/Accordion';
import { siteConfig } from '@/config/site';

export const metadata = { title: 'About Us | Shambel App' };

export default function AboutPage() {
 const stats = [
  { icon: Youtube, value: "400K+", label_en: "YouTube Subscribers", label_am: "የዩቲዩብ ተከታዮች", color: "text-red-600", hoverBg: "group-hover:shadow-red-500/30" },
  { icon: Facebook, value: "500K+", label_en: "Facebook Followers", label_am: "የፌስቡክ ተከታዮች", color: "text-blue-600", hoverBg: "group-hover:shadow-blue-500/30" },
  { icon: Video, value: "100K+", label_en: "TikTok Followers", label_am: "የቲክቶክ ተከታዮች", color: "text-black dark:text-white", hoverBg: "group-hover:shadow-gray-500/30" },
];

  const expertise = [
    { icon: Code, title_en: "Web Development", title_am: "የድረ-ገጽ እድገት", desc_en: "React, Node.js, Next.js, TypeScript", desc_am: "ሬአክት፣ ኖድ.js፣ ኔክስት.js፣ ታይፕስክሪፕት" },
    { icon: Smartphone, title_en: "Android App", title_am: "አንድሮይድ መተግበሪያ", desc_en: "Java, Kotlin, Android Studio", desc_am: "ጃቫ፣ ኮትሊን፣ አንድሮይድ ስቱዲዮ" },
    { icon: Server, title_en: "Cyber Security", title_am: "ሳይበር ደህንነት", desc_en: "Network Security, Ethical Hacking", desc_am: "የኔትወርክ ደህንነት፣ በጎ አላማ ሃኪንግ" },
  ];

const faqs = [
  {
    q_en: "What is Shambel App?",
    q_am: "ሻምበል አፕ ምንድነው?",
    a_en: "Shambel App is a tech educational platform where I share practical tutorials on mobile security, useful applications, and web development.",
    a_am: "ሻምበል አፕ ስለ ሞባይል ደህንነት፣ አዳዲስ አፕሊኬሽኖች እና የቴክኖሎጂ ትምህርቶችን በቀላሉ የማቀርብበት መድረክ ነው።"
  },
  {
    q_en: "How often do you post new content?",
    q_am: "አዳዲስ ትምህርቶችን በምን ያህል ጊዜ ትለቃለህ?",
    a_en: "I regularly upload hands-on tech tutorials under 30 minutes on my YouTube, TikTok, and Facebook channels.",
    a_am: "በዩቲዩብ፣ ቲክቶክ እና ፌስቡክ ገጾቼ ላይ አጫጭር እና ጠቃሚ የቴክኖሎጂ ትምህርቶችን በቋሚነት እለቃለሁ።"
  }
];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-white tracking-tight leading-tight mb-6">
            <T en="Hi, I'm Shambel shifere" am="ሰላም፣ እኔ ሻምበል ሺፈሬ ነኝ" />
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
         <T 
  en="Hi, I'm Shambel Shifere. With over eight years of experience in the digital space, I am a dedicated tech content creator specializing in mobile technology. Through my platforms—Shambel App Tube on YouTube, and Shambel App on Facebook and TikTok—I educate a community of over one million followers. My content focuses on advanced Android configurations, discovering innovative applications, practical AI tools, and essential mobile cyber security practices. My mission is to make complex technology safe, intuitive, and accessible for everyone." 
  am="ሰላም፤ እኔ ሻምበል ሽፈራው እባላለሁ። ከ8 ዓመታት በላይ በቴክኖሎጂው ዘርፍ ሰፊ ልምድ ያለኝ ዲጂታል የይዘት ፈጣሪ ነኝ። በ 'Shambel App Tube' የዩቲዩብ ቻናል እንዲሁም በ 'Shambel App' የፌስቡክ እና ቲክቶክ ገጾቼ አማካኝነት ከ1 ሚሊዮን በላይ ለሚሆን ማህበረሰብ ጠቃሚ የቴክኖሎጂ ትምህርቶችን አቀርባለሁ። ትምህርቶቼ በዋናነት በአንድሮይድ ስልኮች አጠቃቀም፣ አዳዲስ ጠቃሚ አፕሊኬሽኖችን በማስተዋወቅ፣ በዘመናዊ የኤአይ (AI) ቴክኖሎጂዎች እና በሞባይል ሳይበር ሴኪዩሪቲ (Cyber Security) ላይ ያተኮሩ ናቸው። አላማዬ ዘመናዊ ቴክኖሎጂን ለሁሉም ሰው ቀላል፣ ደህንነቱ የተጠበቀ እና ተደራሽ ማድረግ ነው።" 
/>
          </p>
          <Link href="https://www.youtube.com/@shambleapptube" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold hover:opacity-80 transition-opacity">
            <Youtube className="w-5 h-5" /> <T en="Visit YouTube Channel" am="የዩቲዩብ ቻናል ይጎብኙ" />
          </Link>
        </div>
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-soft">
          <Image
           src="/shambel.jpg"
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
          <p className="text-gray-600 dark:text-gray-300"><T 
  en="To provide high-quality, practical tech education and cyber security awareness, ensuring everyone can safely navigate the digital world." 
  am="ጥራት ያለውና ተግባራዊ የቴክኖሎጂ ትምህርት እንዲሁም የሳይበር ሴኪዩሪቲ ግንዛቤን በመፍጠር፣ ሁሉም ሰው የዲጂታሉን አለም በደህንነት እንዲጠቀም ማስቻል ነው።"/></p>
        </div>
        <div className="bg-gray-50 dark:bg-primary-light p-8 rounded-2xl">
          <Rocket className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-4"><T en="Our Vision" am="ራዕያችን" /></h3>
          <p className="text-gray-600 dark:text-gray-300"><T 
  en="To build the largest and most informed tech community, making advanced technology and mobile security accessible to all." 
  am="ትልቁንና የተሻለ እውቀት ያለውን የቴክኖሎጂ ማህበረሰብ በመገንባት፣ ዘመናዊ ቴክኖሎጂን እና የሞባይል ደህንነትን ለሁሉም ተደራሽ ማድረግ ነው።"/></p>
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