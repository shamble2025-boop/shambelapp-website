'use client';
import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import T from '@/components/ui/T';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="p-4 bg-accent/10 border border-accent rounded-xl flex items-center gap-3 text-accent">
          <CheckCircle className="w-5 h-5" />
          <p className="text-sm font-medium"><T en="Message sent successfully! We will get back to you soon." am="መልዕክት በተሳካ ሁኔታ ተልኳል! በቅርቡ እናገኝዎታለን።" /></p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-xl flex items-center gap-3 text-red-500">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm font-medium">{errorMessage}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-primary dark:text-white mb-2"><T en="Your Name" am="ስምዎ" /></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-primary dark:text-white mb-2"><T en="Your Email" am="ኢሜልዎ" /></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-primary dark:text-white mb-2"><T en="Subject" am="ርዕስ" /></label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-primary dark:text-white mb-2"><T en="Message" am="መልዕክት" /></label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white resize-none"
          placeholder="Write your message here..."
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-3 bg-primary text-white dark:bg-accent dark:text-black rounded-full font-bold hover:opacity-80 transition-opacity disabled:opacity-50 flex items-center gap-2"
      >
        {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
        <T en="Send Message" am="መልዕክት ላክ" />
      </button>
    </form>
  );
}