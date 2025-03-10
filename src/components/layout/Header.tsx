import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-2xl font-serif font-bold text-wine-900"
              >
                <BookOpenIcon className="w-7 h-7 text-wine-600" />
                Parable List
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/parables" 
              className="text-wine-600 hover:text-wine-900 transition-colors"
            >
              Parables
            </Link>
            <Link 
              href="/categories" 
              className="text-wine-600 hover:text-wine-900 transition-colors"
            >
              Inspiration
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 