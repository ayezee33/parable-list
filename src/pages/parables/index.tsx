import { GetStaticProps } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { getAllParables } from '@/utils/mdx'
import { Parable } from '@/types/Parable'
import ParableFilters from '@/components/ParableFilters'
import { BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline'
import MailerLiteForm from '@/components/MailerLiteForm'
interface ParablesPageProps {
  parables: Parable[]
  categories: string[]
  testaments: string[]
}

export default function ParablesPage({ parables, categories, testaments }: ParablesPageProps) {
  const [filteredParables, setFilteredParables] = useState(parables)

  const handleFilterChange = ({ testament, category }: { testament?: string; category?: string }) => {
    let filtered = parables
    
    if (testament) {
      filtered = filtered.filter(p => p.testament === testament)
    }
    
    if (category) {
      filtered = filtered.filter(p => p.categories.includes(category))
    }
    
    setFilteredParables(filtered)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <SparklesIcon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h1 className="text-5xl font-serif font-bold text-wine-900 mb-4">
            Biblical Parables
          </h1>
          <p className="text-xl text-wine-700/80 max-w-2xl mx-auto">
            Explore the timeless wisdom of Jesus through His parables
          </p>
        </div>
        
        <ParableFilters 
          testaments={testaments}
          categories={categories}
          onFilterChange={handleFilterChange}
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParables.map((parable) => (
            <Link
              href={`/parables/${parable.testament}-testament/${parable.id}`}
              key={parable.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1 
                       overflow-hidden border border-scroll-200"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 
                           bg-wine-100 rounded-full opacity-10 group-hover:scale-150 
                           transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 -ml-16 -mb-16 
                           bg-gold-400 rounded-full opacity-10 group-hover:scale-150 
                           transition-transform duration-500" />
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-serif font-bold text-wine-900 group-hover:text-wine-700 
                               transition-colors duration-300">
                    {parable.title}
                  </h2>
                  <BookOpenIcon className="w-6 h-6 text-wine-500 flex-shrink-0 
                                      transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <p className="text-sm text-wine-700/70 font-serif mb-6">
                  {parable.bibleReference.book} {parable.bibleReference.chapter}:{parable.bibleReference.verse}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {parable.categories.slice(0, 3).map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 text-sm bg-wine-100 text-wine-800 
                               rounded-full font-medium border border-wine-200"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <section className="bg-wine-900 py-24 mt-24 rounded-xl">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-8">
            Get Weekly Encouragement & Insights Via Parables
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Drop your email below to receive a new parable each week.
          </p>
          <MailerLiteForm />
        </div>
      </section>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const parables = getAllParables()
  const categories = Array.from(
    new Set(parables.flatMap(p => p.categories))
  ).sort()
  const testaments = ['old', 'new']

  return {
    props: {
      parables,
      categories,
      testaments,
    },
  }
} 