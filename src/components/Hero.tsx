import React from 'react';
import { BookOpenIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative bg-parchment-100 w-full">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-temple-100 to-temple-200 opacity-50" />
      <div className="absolute inset-0 bg-[url('/scroll-texture.png')] mix-blend-multiply" />
      
      {/* Hero Content */}
      <div className="relative w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8 max-w-5xl mx-auto">            
            <h1 className="text-5xl tracking-tight font-serif font-bold text-wine-900 sm:text-6xl md:text-7xl">
              Biblical Parables
              <span className="block text-amber-600 mt-2 text-4xl sm:text-5xl md:text-6xl">
                Ancient Wisdom for Modern Life
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-800 sm:text-xl md:text-2xl leading-relaxed">
              Discover the timeless teachings of Jesus and the prophets through their powerful stories
            </p>
            
            <div className="mt-10 flex justify-center gap-4">
              <a href="/parables" 
                 className="px-8 py-4 bg-wine-900 text-white rounded-lg shadow-lg 
                          hover:bg-wine-800 transition-colors duration-200 
                          text-lg font-semibold flex items-center gap-2">
                <BookOpenIcon className="w-6 h-6" />
                Explore Parables
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 