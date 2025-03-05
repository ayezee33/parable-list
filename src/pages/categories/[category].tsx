import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { getAllCategories, getParablesByCategory } from '@/utils/mdx'
import { Parable } from '@/types/Parable'
import { BookOpenIcon, SparklesIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface CategoryPageProps {
  category: string
  parables: Parable[]
}

export default function CategoryPage({ category, parables }: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/categories"
          className="inline-flex items-center text-wine-600 hover:text-wine-700 mb-8 group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Inspiration
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <SparklesIcon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h1 className="text-5xl font-serif font-bold text-wine-900 mb-4 capitalize">
            {category}
          </h1>
          <p className="text-xl text-wine-700/80">
            {parables.length} {parables.length === 1 ? 'parable' : 'parables'} about {category}
          </p>
        </div>

        {/* Parables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parables.map((parable) => (
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
                
                <p className="text-wine-600/80 font-serif mb-4">
                  {parable.bibleReference.book} {parable.bibleReference.chapter}:{parable.bibleReference.verse}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {parable.categories
                    .filter(c => c !== category)
                    .slice(0, 3)
                    .map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 text-sm bg-wine-100 text-wine-800 
                                 rounded-full font-medium border border-wine-200"
                      >
                        {c}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getAllCategories()
  
  const paths = categories.map((category) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string
  const parables = getParablesByCategory(category)

  if (!parables.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category,
      parables,
    },
  }
} 