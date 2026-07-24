import { getVideos } from '@/services/api.service';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import T from '@/components/ui/T';

export const metadata = { title: 'Video Tutorials | Shambel App' };

export default async function VideosPage() {
  const videos = await getVideos();
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white tracking-tight mb-12"><T en="Video Tutorials" am="የቪዲዮ ማስተማሪያዎች" /></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
        <Link href={`/videos/${video.id}`} key={video.id} className="group block">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image src={video.thumbnail} alt={video.title_en} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="400px" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
            </div>
            <h3 className="font-bold text-primary dark:text-white group-hover:text-accent transition-colors"><T en={video.title_en} am={video.title_am} /></h3>
          </Link>
        ))}
      </div>
    </main>
  );
}