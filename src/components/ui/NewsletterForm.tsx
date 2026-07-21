'use client';
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import T from '@/components/ui/T';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
      <input 
        type="email" 
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
        placeholder="Enter your email" 
        className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder:text-gray-500"
        disabled={status === 'loading' || status === 'success'}
      />
      <button 
        onClick={handleSubmit} 
        disabled={status === 'loading' || status === 'success'}
        className="px-8 py-3 bg-accent text-black rounded-full font-bold hover:bg-accent-dark transition-colors disabled:opacity-70 flex items-center justify-center min-w-[120px]"
      >
        {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 
         status === 'success' ? <CheckCircle className="w-5 h-5" /> : 
         <T en="Subscribe" am="ይመዝገቡ" />}
      </button>
      
      {status === 'success' && <p className="text-accent text-sm mt-2 w-full text-center"><T en="Successfully subscribed!" am="በተሳካ ሁኔታ ተመዝግበዋል!" /></p>}
      {status === 'error' && <p className="text-red-400 text-sm mt-2 w-full text-center"><T en="Invalid email address." am="የተሳሳተ የኢሜል አድራሻ።" /></p>}
      {status === 'duplicate' && <p className="text-yellow-400 text-sm mt-2 w-full text-center"><T en="You are already subscribed!" am="አስቀድሞ ተመዝግበዋል!" /></p>}
    </div>
  );
}