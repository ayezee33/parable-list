import React from 'react';
import { 
  BookOpenIcon,
  HeartIcon,
  FireIcon,
  SunIcon,
  StarIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline'
import MailerLiteForm from './MailerLiteForm'

export default function Hero() {
  return (
    <section className="relative bg-parchment-100 py-24 shadow-lg rounded-lg">
      {/* Parchment texture overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='4' seed='10' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0.2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.15'/%3E%3C/svg%3E")
          `,
          backgroundSize: '100% 100%, 200px 200px',
          backgroundBlendMode: 'overlay, multiply'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-7xl font-serif font-bold text-wine-800 mb-6">
          Biblical Parables
        </h1>
        <p className="text-3xl text-wine-800 mb-8">
          Ancient Wisdom Turned Into Modern Insights
        </p>

        {/* Biblical symbols row */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <BookOpenIcon className="w-8 h-8 text-wine-600" />
          <HeartIcon className="w-8 h-8 text-wine-600" />
          <FireIcon className="w-8 h-8 text-wine-600" />
          <SunIcon className="w-8 h-8 text-wine-600" />
          <StarIcon className="w-8 h-8 text-wine-600" />
          <SparklesIcon className="w-8 h-8 text-wine-600" />
        </div>

        <a
          href="/parables"
          className="inline-flex items-center gap-2 bg-wine-800 px-8 py-3 text-white font-bold rounded-lg hover:bg-wine-600 transition-colors"
        >
          <BookOpenIcon className="w-5 h-5" />
          <span>Explore Parables</span>
          
        </a>
      </div>
    </section>
  )
} 