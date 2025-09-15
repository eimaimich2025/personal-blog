import FadeInWrapper from '@/components/FadeInWrapper';

export default function Store() {
  const categories = [
    {
      title: "Books That Shaped Me",
      description: "The books that fundamentally changed how I think about business, life, and success.",
      items: [
        {
          title: "Atomic Habits",
          author: "James Clear",
          description: "The definitive guide to building good habits and breaking bad ones. This book completely changed how I approach personal development.",
          amazonUrl: "https://amazon.com/dp/0735211299",
          image: "/api/placeholder/200/300"
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          description: "Essential reading for any entrepreneur. The methodology in this book saved me months of wasted effort on my first startup.",
          amazonUrl: "https://amazon.com/dp/0307887898",
          image: "/api/placeholder/200/300"
        },
        {
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          description: "A masterclass in understanding human psychology and decision-making. Every business leader should read this.",
          amazonUrl: "https://amazon.com/dp/0374533555",
          image: "/api/placeholder/200/300"
        }
      ]
    },
    {
      title: "Tech I Use Daily",
      description: "The tools and gadgets that power my productivity and creativity every day.",
      items: [
        {
          title: "MacBook Pro 16-inch",
          author: "Apple",
          description: "My primary work machine. The M2 chip handles everything from coding to video editing without breaking a sweat.",
          amazonUrl: "https://amazon.com/dp/B0B3C2Q5ZR",
          image: "/api/placeholder/200/300"
        },
        {
          title: "Logitech MX Master 3S",
          author: "Logitech",
          description: "The best mouse I've ever used. The precision and ergonomics make long coding sessions comfortable.",
          amazonUrl: "https://amazon.com/dp/B09HM94VDS",
          image: "/api/placeholder/200/300"
        },
        {
          title: "Sony WH-1000XM5 Headphones",
          author: "Sony",
          description: "Perfect for focused work and podcast recording. The noise cancellation is incredible.",
          amazonUrl: "https://amazon.com/dp/B09XS7JWHH",
          image: "/api/placeholder/200/300"
        }
      ]
    },
    {
      title: "Productivity Essentials",
      description: "Tools and resources that help me stay organized and efficient.",
      items: [
        {
          title: "Notion Pro",
          author: "Notion Labs",
          description: "My digital brain. I use it for everything from project management to knowledge base building.",
          amazonUrl: "https://amazon.com/dp/B08N5WRWNW",
          image: "/api/placeholder/200/300"
        },
        {
          title: "Cal Newport's Deep Work",
          author: "Cal Newport",
          description: "The book that taught me how to focus in our distracted world. Essential for knowledge workers.",
          amazonUrl: "https://amazon.com/dp/1455586692",
          image: "/api/placeholder/200/300"
        },
        {
          title: "Standing Desk Converter",
          author: "FlexiSpot",
          description: "Health is wealth. This standing desk converter keeps me active during long work sessions.",
          amazonUrl: "https://amazon.com/dp/B07QYZXT4K",
          image: "/api/placeholder/200/300"
        }
      ]
    }
  ];

  return (
    <div className="cinematic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInWrapper>
            <h1 className="text-5xl font-bold text-white mb-6">
              My Curated Store
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Everything I personally use and recommend. These are the tools, books, and resources 
              that have genuinely helped me build businesses, learn faster, and live better.
            </p>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-yellow-200 text-sm">
                <strong>Note:</strong> Some links are affiliate links, which means I earn a small commission 
                if you purchase through them. This doesn't cost you anything extra and helps support my work.
              </p>
            </div>
          </FadeInWrapper>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <FadeInWrapper key={category.title} delay={categoryIndex * 200}>
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <FadeInWrapper key={item.title} delay={itemIndex * 100}>
                      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        {/* Product Image Placeholder */}
                        <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-12 h-12 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <p className="text-white/80 text-sm">Product Image</p>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-purple-400 text-sm mb-3">
                          by {item.author}
                        </p>
                        
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        <a
                          href={item.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.27 9.29l-1.94-.16L19.8 2.5 17.16 9.1l-1.9.16 2.72 6.62L13.6 8.5l-1.78.14L18.44 22l1.92-.15L16.2 9.5l2.32 6.43L23.27 9.29zM14.15 22l-2.4-6.43L9.35 22H6.5l3.9-9.5L6.5 2.5h2.85l2.33 6.43L13.9 2.5h2.85l-3.9 9.5L16.65 22h-2.5z"/>
                          </svg>
                          View on Amazon
                        </a>
                      </div>
                    </FadeInWrapper>
                  ))}
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>

        {/* Additional Resources */}
        <FadeInWrapper delay={600}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                More Resources
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Additional tools and services I recommend for entrepreneurs and creators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Software & Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Vercel (Hosting & Deployment)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Stripe (Payments)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Linear (Project Management)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Figma (Design)</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Learning Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Coursera (Online Courses)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">MasterClass (Expert Classes)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">YouTube (Free Content)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Audible (Audiobooks)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInWrapper>

        {/* Disclaimer */}
        <FadeInWrapper delay={700}>
          <div className="mt-16 text-center">
            <div className="glass rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Affiliate Disclosure</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                I only recommend products and services that I personally use and believe in. 
                Some of the links on this page are affiliate links, which means I may earn a small commission 
                if you make a purchase through them. This helps support my work and allows me to continue 
                creating valuable content for you. Thank you for your support!
              </p>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}
