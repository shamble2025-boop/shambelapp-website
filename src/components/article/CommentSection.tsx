'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import T from '@/components/ui/T';
import { useApp } from '@/context/AppContext';

export default function CommentSection({ articleId }: { articleId: number }) {
  const { t } = useApp();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ id: number; text: string; author: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: comment.trim(),
      author: 'Guest User'
    };

    setComments((prev) => [newComment, ...prev]);
    setComment('');
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-accent" />
        <T en="Comments" am="አስተያየቶች" /> ({comments.length})
      </h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white transition-all resize-y"
          rows={3} 
          placeholder={t('Join the discussion...', 'ከዚህ ጋር አስተያየትዎን ያስቀመጡ...')}
          style={{ fontFamily: 'Inter, "Noto Sans Ethiopic", sans-serif' }}
        ></textarea>
        <button 
          type="submit" 
          className="mt-4 px-6 py-2 bg-primary text-white dark:bg-accent dark:text-black rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <T en="Post Comment" am="አስተያየት አስቀምጥ" /> <Send className="w-4 h-4" />
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-4 p-4 bg-white dark:bg-primary-light rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
              {c.author[0]}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-primary dark:text-white text-sm">{c.author}</span>
                <span className="text-xs text-gray-400">
                  <T en="Just now" am="አሁን አሁን" />
                </span>
              </div>
              <p 
                className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-wrap break-words text-left"
                style={{ fontFamily: 'Inter, "Noto Sans Ethiopic", sans-serif' }}
              >
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}