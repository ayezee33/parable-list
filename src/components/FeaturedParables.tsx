import Link from 'next/link'
import { Parable } from '@/types/Parable'

interface FeaturedParablesProps {
  parables: Parable[]
}

export default function FeaturedParables({ parables }: FeaturedParablesProps) {
  if (!parables || parables.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {parables.map((parable) => (
        <div key={parable.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{parable.title}</h3>
          {parable.bibleReference && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {parable.bibleReference.book} {parable.bibleReference.chapter}:{parable.bibleReference.verse}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {parable.categories.slice(0, 3).map((category) => (
              <span
                key={category}
                className="px-2 py-1 text-sm bg-wine-100 dark:bg-wine-900 text-wine-800 dark:text-wine-100 rounded"
              >
                {category}
              </span>
            ))}
          </div>
          <Link
            href={`/parables/${parable.testament}-testament/${parable.id}`}
            className="mt-4 inline-block text-wine-600 dark:text-wine-400 hover:underline"
          >
            Read more →
          </Link>
        </div>
      ))}
    </div>
  )
} 