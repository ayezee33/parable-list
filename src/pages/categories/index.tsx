import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getAllCategories, getParablesByCategory } from '@/utils/mdx'
import { BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface CategorySummary {
  name: string
  count: number
}

interface CategoriesPageProps {
  categories: CategorySummary[]
}

export default function CategoriesPage({ categories }: CategoriesPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <SparklesIcon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h1 className="text-5xl font-serif font-bold text-wine-900 mb-4">
            Find Your Inspiration
          </h1>
          <p className="text-xl text-wine-700/80 max-w-2xl mx-auto">
            Discover parables that speak to your journey and current life experiences
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(({ name, count }) => (
            <Link
              href={`/categories/${name}`}
              key={name}
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
                               transition-colors duration-300 capitalize">
                    {name}
                  </h2>
                  <BookOpenIcon className="w-6 h-6 text-wine-500 flex-shrink-0 
                                      transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <p className="text-wine-600">
                  {count} {count === 1 ? 'parable' : 'parables'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categoryNames = getAllCategories()
  const categories = categoryNames.map(name => ({
    name,
    count: getParablesByCategory(name).length,
  }))

  return {
    props: {
      categories,
    },
  }
} 