'use client';
import { useState } from 'react';
import { Twitter, Facebook, Linkedin, Link2, Send, MessageCircle } from 'lucide-react';

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors" title="Share on X (Twitter)">
        <Twitter className="w-4 h-4" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors" title="Share on Facebook">
        <Facebook className="w-4 h-4" />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors" title="Share on LinkedIn">
        <Linkedin className="w-4 h-4" />
      </a>
      <a href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors" title="Share on Telegram">
        <Send className="w-4 h-4" />
      </a>
      <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors" title="Share on WhatsApp">
        <MessageCircle className="w-4 h-4" />
      </a>
      <button onClick={copyLink} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors relative" title="Copy Link">
        <Link2 className="w-4 h-4" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">Copied!</span>
        )}
      </button>
    </div>
  );
}