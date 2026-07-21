'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '@/types';
import T from '@/components/ui/T';

export default function HeroSlider({ slides }: { slides: Article[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      let next = prev + direction;
      if (next >= slides.length) next = 0;
      if (next < 0) next = slides.length - 1;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => changeSlide(1), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="lg:col-span-9 fade-in-up">
      <div className="relative rounded-2xl overflow-hidden shadow-soft group h-[350px] md:h-[450px] w-full">
        <div className="flex slider-track h-full w-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0 relative h-full">
              <Image src={slide.thumbnail} alt={slide.title_en} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 75vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                  <T en={slide.category_en} am={slide.category_am} />
                </span>
                <h2 className="text-white text-3xl md:text-5xl font-extrabold mt-4 max-w-xl tracking-tight">
                  <T en={slide.title_en} am={slide.title_am} />
                </h2>
                <div className="flex items-center gap-4 mt-4 text-gray-300 text-sm">
                  <span>{slide.author}</span>
                  <span>•</span>
                  <span><T en={`${slide.readingTime} min read`} am={`${slide.readingTime} ደቂቃ ንባብ`} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => changeSlide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors opacity-0 group-hover:opacity-100 duration-300 z-10">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => changeSlide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-black transition-colors opacity-0 group-hover:opacity-100 duration-300 z-10">
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? 'bg-accent w-6' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}