import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaYoutube, FaFacebook, FaTelegram, FaTiktok, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import T from '@/components/ui/T';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata = { title: 'Contact Us | Shambel App' };

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, label_en: "Email", label_am: "ኢሜል", value: "shamble2025@gmail.com", href: "mailto:shamble2025@gmail.com" },
    { icon: Phone, label_en: "Phone", label_am: "ስልክ", value: "+251 909693472", href: "tel:+251909693472" },
    { icon: MapPin, label_en: "Location", label_am: "ቦታ", value: "Addis Ababa, Ethiopia", href: null },
  ];

const socials = [
  { icon: FaYoutube, href: "https://www.youtube.com/@shambleapptube" },
  { icon: FaFacebook, href: "https://www.facebook.com/shambelapp" },
  { icon: FaTelegram, href: "https://t.me/shambleshifere" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@shambleshifere" },
  { icon: FaInstagram, href: "https://www.instagram.com/shamble_app_tube" },
];

  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight mb-4">
          <T en="Get In Touch" am="አግኙን" />
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          <T en="Have a question or feedback? We'd love to hear from you. Fill out the form below or reach out via our social channels." am="ጥያቄ ወይም አስተያየት አለዎት? መስመር ላይ ለመሳተፍ እንወዳለን። ከታች ያለውን ቅጽ ይሙሉ ወይም በማህበራዊ ሚዲያ ቻናሎቻችን ያግኙን።" />
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-primary-light p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-6"><T en="Send a Message" am="መልዕክት ላክ" /></h2>
          <ContactForm />
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-primary-light p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-6"><T en="Contact Information" am="የእውቂያ መረጃ" /></h3>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1"><T en={info.label_en} am={info.label_am} /></p>
                    {info.href ? (
                      <a href={info.href} className="text-primary dark:text-white font-medium hover:text-accent transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-primary dark:text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-400 mb-4"><T en="Follow Us" am="ከእኛ ጋር ይከታተሉ" /></p>
           <div className="flex gap-3">
  {socials.map((social, i) => {
    const Icon = social.icon;
    return (
      <Link
        key={i}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-all duration-300 group hover:scale-110 hover:!bg-[#FF0000] [&:nth-child(2)]:hover:!bg-[#1877F2] [&:nth-child(3)]:hover:!bg-[#24A1DE] [&:nth-child(4)]:hover:!bg-black dark:[&:nth-child(4)]:hover:!bg-white [&:nth-child(5)]:hover:!bg-[#E4405F]"
      >
        <Icon className="w-5 h-5 text-gray-800 dark:text-white group-hover:!text-white [&:nth-child(4)]:group-hover:dark:!text-black transition-colors" />
      </Link>
    );
  })}
</div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white dark:bg-primary-light p-2 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63036.68853978334!2d38.6892!3d9.0249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0xaca17f51852a7cb!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}