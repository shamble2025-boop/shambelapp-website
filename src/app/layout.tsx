import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchOverlay from '@/components/layout/SearchOverlay';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Shambel App | Learn Technology. Grow Faster.',
  description: 'Premium tutorials on AI, Cyber Security, Android, and Web Development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-black transition-colors duration-300">
        <AppProvider>
          <Header />
          <SearchOverlay />
          <main className="min-h-screen pb-20">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}