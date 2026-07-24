'use client';
import { useState } from 'react';
import { Twitter, Facebook, Linkedin, Link2, Send, Share2 } from 'lucide-react';

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.error('Share failed');
      }
    } else {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleNativeShare} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors" title="Share">
        <Share2 className="w-4 h-4" />
      </button>
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
      <button onClick={copyLink} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-black transition-colors relative" title="Copy Link">
        <Link2 className="w-4 h-4" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">Copied!</span>
        )}
      </button>
    </div>
  );
}