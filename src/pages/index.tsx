import { GetStaticProps } from 'next'
import FeaturedParables from '@/components/FeaturedParables'
import Hero from '@/components/Hero'
import { getAllParables } from '@/utils/mdx'
import { Parable } from '@/types/Parable'
import { BookOpenIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline'
import MailerLiteForm from '@/components/MailerLiteForm'

interface HomeProps {
  featuredParables: Parable[]
}
interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-1 
                    border border-gray-100">
      <div className="text-wine-500 mb-6 w-12 h-12">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-wine-900 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
export default function Home({ featuredParables }: HomeProps) {
  return (
    <div className="space-y-8">
      <Hero />
      
      {/* Dictionary Definition Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border-l-4 border-wine-300 pl-8 py-8 bg-white rounded-r-xl shadow-md">
            <h2 className="font-serif text-4xl text-wine-900 mb-6 flex items-center gap-3">
              <BookOpenIcon className="w-8 h-8 text-wine-500" />
              What is a Parable?
            </h2>
            
            <div className="space-y-6">
              <div>
                <span className="font-serif text-2xl text-wine-800">par·a·ble</span>
                <span className="text-wine-500/70 ml-4 font-serif">/ˈperəb(ə)l/</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="italic text-wine-700/70">noun</span>
                  <p className="text-xl text-wine-900 mt-2 leading-relaxed font-serif">
                    A simple story used to illustrate a moral or spiritual lesson, as told by Jesus in the Gospels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-parchment-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-wine-900 text-center mb-16">
              Why Study Parables?
            </h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard 
                icon={<BookOpenIcon />}
                title="Ancient Wisdom"
                description="Understand the cultural and historical context behind these timeless stories that have shaped civilizations"
              />
              <BenefitCard 
                icon={<AcademicCapIcon />}
                title="Deeper Understanding"
                description="Gain practical insights for applying biblical principles to modern life challenges and decisions"
              />
              <BenefitCard 
                icon={<HeartIcon />}
                title="Spiritual Growth"
                description="Strengthen your faith through Jesus' teaching methods and discover deeper spiritual truths"
              />
            </div>
          </div>
        </div>
        </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-wine-900 mb-16 text-center">
            Featured Parables
          </h2>
          <FeaturedParables parables={featuredParables} />
        </div>
      </section>
      
      {/* Newsletter Signup Placeholder */}
      <section className="bg-wine-900 py-24">
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allParables = getAllParables()
  const featuredParables = allParables.slice(0, 6) // Get first 6 parables as featured

  return {
    props: {
      featuredParables,
    },
  }
} 