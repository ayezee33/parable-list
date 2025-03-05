import { Scroll, Book, Cross, Star } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className="relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-temple-100 to-temple-200 opacity-50" />
      <div className="absolute inset-0 bg-[url('/scroll-texture.png')] mix-blend-multiply" />
      
      {/* Hero Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8">
            {/* Decorative icon */}
            <div className="flex justify-center">
              <Star weight="fill" className="w-12 h-12 text-gold-500" />
            </div>
            
            <h1 className="text-5xl tracking-tight font-serif font-bold text-wine-700 sm:text-6xl md:text-7xl">
              Biblical Parables
              <span className="block text-gold-500 mt-2 text-4xl sm:text-5xl md:text-6xl">
                Ancient Wisdom for Modern Life
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-lg text-temple-700 sm:text-xl md:text-2xl leading-relaxed">
              Discover the timeless teachings of Jesus and the prophets through their powerful stories
            </p>
            
            <div className="mt-10 flex justify-center gap-4">
              <a href="/parables" 
                 className="px-8 py-4 bg-wine-600 text-white rounded-lg shadow-lg 
                          hover:bg-wine-700 transition-colors duration-200 
                          text-lg font-semibold flex items-center gap-2">
                <Book weight="bold" className="w-5 h-5" />
                Explore Parables
              </a>
              <a href="/about" 
                 className="px-8 py-4 bg-scroll-100 text-wine-700 rounded-lg shadow-lg 
                          hover:bg-scroll-200 transition-colors duration-200 
                          text-lg font-semibold flex items-center gap-2">
                <Scroll weight="bold" className="w-5 h-5" />
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white/90 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-wine-700 text-center mb-16">
            Why Study Parables?
          </h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard 
              icon={<Scroll size={40} weight="duotone" />}
              title="Ancient Wisdom"
              description="Understand the cultural and historical context behind these timeless stories that have shaped civilizations"
            />
            <BenefitCard 
              icon={<Book size={40} weight="duotone" />}
              title="Deeper Understanding"
              description="Gain practical insights for applying biblical principles to modern life challenges and decisions"
            />
            <BenefitCard 
              icon={<Cross size={40} weight="duotone" />}
              title="Spiritual Growth"
              description="Strengthen your faith through Jesus' teaching methods and discover deeper spiritual truths"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-parchment-50 rounded-xl shadow-md hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-1 
                    border border-scroll-200">
      <div className="text-gold-500 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold text-wine-700 mb-4">{title}</h3>
      <p className="text-temple-700 leading-relaxed">{description}</p>
    </div>
  );
} 