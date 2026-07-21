'use client';
import { useEffect } from 'react';
import T from '@/components/ui/T';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center px-4">
      <h2 className="text-2xl font-bold text-primary dark:text-white mb-4"><T en="Something went wrong!" am="የሆነ ችግር ተፈጥሯል!" /></h2>
      <p className="text-gray-500 mb-8"><T en="An unexpected error occurred while fetching data." am="ውሂብ በማምጣት ላይ ያልተጠበቀ ስህተት ተፈጥሯል።" /></p>
      <button onClick={() => reset()} className="px-6 py-3 bg-accent text-black rounded-full font-bold hover:bg-accent-dark transition-colors">
        <T en="Try again" am="እንደገና ይሞክሩ" />
      </button>
    </div>
  );
}