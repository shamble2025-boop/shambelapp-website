'use client';
import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import T from '@/components/ui/T';

export default function CommentSection({ articleId }: { articleId: number }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ id: number; text: string; author: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    // INTEGRATION: Replace with POST fetch to your API
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}/comments`, { method: 'POST', body: JSON.stringify({ text: comment }) });
    
    setComments([...comments, { id: Date.now(), text: comment, author: 'Guest User' }]);
    setComment('');
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-accent" /> <T en="Comments" am="አስተያየቶች" /> ({comments.length})
      </h3>
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white transition-all" 
          rows={3} 
          placeholder="Join the discussion..."
        ></textarea>
        <button type="submit" className="mt-4 px-6 py-2 bg-primary text-white dark:bg-accent dark:text-black rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
          <T en="Post Comment" am="አስተያየት አስቀምጥ" /> <Send className="w-4 h-4" />
        </button>
      </form>
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="flex gap-4 p-4 bg-white dark:bg-primary-light rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">{c.author[0]}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-primary dark:text-white text-sm">{c.author}</span>
                <span className="text-xs text-gray-400"><T en="Just now" am="አሁን አሁን" /></span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}