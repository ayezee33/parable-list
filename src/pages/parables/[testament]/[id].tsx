import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllParables, getParableById } from '@/utils/mdx'
import { Parable } from '@/types/Parable'
import Link from 'next/link'
import { BookOpenIcon, SparklesIcon, LightBulbIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface ParablePageProps {
  parable: Parable
}

export default function ParablePage({ parable }: ParablePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/parables"
          className="inline-flex items-center text-wine-600 hover:text-wine-700 mb-8 group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Parables
        </Link>

        <article>
          <header className="text-center mb-16">
            <SparklesIcon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h1 className="text-5xl font-serif font-bold text-wine-900 mb-4">{parable.title}</h1>
            <p className="text-xl text-wine-700/80 font-serif">
              {parable.bibleReference.book} {parable.bibleReference.chapter}:{parable.bibleReference.verse}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {parable.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-sm bg-wine-100 text-wine-800 
                           rounded-full font-medium border border-wine-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </header>

          <div className="space-y-12">
            <section className="bg-white rounded-xl shadow-md p-8 border border-scroll-200">
              <h2 className="text-2xl font-serif font-bold text-wine-900 mb-6 flex items-center gap-3">
                <BookOpenIcon className="w-6 h-6 text-wine-500" />
                Biblical Text
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-800">
                {parable.biblicalText.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border border-scroll-200">
              <h2 className="text-2xl font-serif font-bold text-wine-900 mb-6 flex items-center gap-3">
                <SparklesIcon className="w-6 h-6 text-wine-500" />
                Context
              </h2>
              <p className="text-gray-800 leading-relaxed">{parable.context}</p>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border border-scroll-200">
              <h2 className="text-2xl font-serif font-bold text-wine-900 mb-6 flex items-center gap-3">
                <LightBulbIcon className="w-6 h-6 text-wine-500" />
                Theological Interpretation
              </h2>
              <p className="text-gray-800 leading-relaxed">{parable.theologicalInterpretation}</p>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border border-scroll-200">
              <h2 className="text-2xl font-serif font-bold text-wine-900 mb-6 flex items-center gap-3">
                <HeartIcon className="w-6 h-6 text-wine-500" />
                Practical Applications
              </h2>
              <div className="space-y-8">
                {parable.practicalApplications.map((point, index) => (
                  <div key={index} 
                       className="relative bg-gradient-to-br from-wine-50/30 to-wine-100/30 
                                rounded-lg p-6 border border-wine-100
                                before:absolute before:inset-0 before:bg-white/40 before:backdrop-blur-sm before:-z-10">
                    <h3 className="text-xl font-semibold text-wine-800 mb-4">{point.title}</h3>
                    <ul className="space-y-3">
                      {point.points.map((subPoint, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <span className="text-wine-500 mr-3">•</span>
                          <span className="text-gray-700">{subPoint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-md p-8 border border-scroll-200">
              <h2 className="text-2xl font-serif font-bold text-wine-900 mb-6">Related Parables</h2>
              <div className="divide-y divide-wine-100">
                {parable.relatedParables.map((related, index) => (
                  <Link 
                    key={index}
                    href={`/parables/${getTestamentFromReference(related.reference)}-testament/${related.id}`}
                    className="group block py-4 first:pt-0 last:pb-0 relative pl-8 hover:pl-10 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-wine-300 
                                  group-hover:bg-wine-500 group-hover:scale-150 transition-all duration-300" />
                    <div className="font-medium text-lg text-wine-800 group-hover:text-wine-900 mb-1 transition-colors">
                      {related.title.startsWith('The ') ? related.title : `The ${related.title}`}
                    </div>
                    <div className="text-sm text-wine-600 group-hover:text-wine-700 transition-colors flex items-center gap-2">
                      <span className="font-serif">{related.reference}</span>
                      <span className="text-wine-300">•</span>
                      <span>{related.theme}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
        <section className="bg-wine-900 py-24 mt-24 rounded-xl">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-8">
            Get Weekly Encouragement & Insights Via Parables
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Drop your email below to receive a new parable each week.
          </p>
          <div className  ="ml-embedded" data-form="9szPSZ"></div>
        </div>
      </section>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const parables = getAllParables()
  
  const paths = parables.map(parable => ({
    params: {
      testament: `${parable.testament}-testament`,
      id: parable.id || '' // Ensure id is never undefined
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { testament: string; id: string } }) {
  const parable = getParableById(params.id)
  
  if (!parable) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      parable
    }
  }
}

// Helper function to determine testament from reference
function getTestamentFromReference(reference: string): string {
  const oldTestamentBooks = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 
    'Joshua', 'Judges', 'Ruth', 
    '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
    '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther',
    'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
    'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
    'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
    'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'
  ];

  // Handle books that start with a number (like "1 Kings")
  const bookMatch = reference.match(/^(?:\d\s+)?[A-Za-z]+/);
  const book = bookMatch ? bookMatch[0] : '';
  
  return oldTestamentBooks.includes(book) ? 'old' : 'new';
} 