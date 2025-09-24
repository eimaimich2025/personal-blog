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
          image: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,600_.jpg"
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          description: "Essential reading for any entrepreneur. The methodology in this book saved me months of wasted effort on my first startup.",
          amazonUrl: "https://amazon.com/dp/0307887898",
          image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L._AC_UL600_SR600,600_.jpg"
        },
        {
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          description: "A masterclass in understanding human psychology and decision-making. Every business leader should read this.",
          amazonUrl: "https://amazon.com/dp/0374533555",
          image: "https://images-na.ssl-images-amazon.com/images/I/81vQhOQ9KIL._AC_UL600_SR600,600_.jpg"
        }
      ]
    },
    {
      title: "Malcolm Gladwell Collection",
      description: "The books that opened my mind to new ways of thinking about success, psychology, and human behavior.",
      items: [
        {
          title: "Outliers",
          author: "Malcolm Gladwell",
          description: "A fascinating exploration of what makes high-achievers different. Gladwell's insights on the 10,000-hour rule and cultural legacies changed how I think about success.",
          amazonUrl: "https://amazon.com/dp/0316017930",
          image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS-TnL._AC_UL600_SR600,600_.jpg"
        },
        {
          title: "The Tipping Point",
          author: "Malcolm Gladwell",
          description: "How little things can make a big difference. This book taught me about the power of social epidemics and how ideas spread.",
          amazonUrl: "https://amazon.com/dp/0316346624",
          image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL600_SR600,600_.jpg"
        },
        {
          title: "Blink",
          author: "Malcolm Gladwell",
          description: "The power of thinking without thinking. A brilliant look at how we make snap judgments and when to trust our instincts.",
          amazonUrl: "https://amazon.com/dp/0316010669",
          image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL600_SR600,600_.jpg"
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
          image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMjAwIiB5Mj0iMzAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2MzY2RjEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUI0RkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2ZyB4PSI3NSIgeT0iMTIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgo8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJTNi40OCAyMiAxMiAyMlMyMiAxNy41MiAyMiAxMlMxNy41MiAyIDEyIDJaTTEzIDE3SDExVjE1SDEzVjE3Wk0xMyAxM0gxMVY3SDEzVjEzWiIvPgo8L3N2Zz4KPC9zdmc+"
        },
        {
          title: "Deep Work",
          author: "Cal Newport",
          description: "The book that taught me how to focus in our distracted world. Essential for knowledge workers.",
          amazonUrl: "https://amazon.com/dp/1455586692",
          image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL600_SR600,600_.jpg"
        },
        {
          title: "Standing Desk Converter",
          author: "FlexiSpot",
          description: "Health is wealth. This standing desk converter keeps me active during long work sessions.",
          amazonUrl: "https://amazon.com/dp/B07QYZXT4K",
          image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMjAwIiB5Mj0iMzAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4QjVDQjUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkRENDA2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2ZyB4PSI3NSIgeT0iMTIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNjAiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgo8cGF0aCBkPSJNMTkgM0g1QzMuOSAzIDMgMy45IDMgNVYxOUMzIDIwLjEgMy45IDIxIDUgMjFIMTlDMjAuMSAyMSAyMSAyMC4xIDIxIDE5VjVDMjEgMy45IDIwLjEgMyAxOSAzWk0xOSAxOUg1VjVIMTlWMTlaTTE3IDdIN1Y5SDE3VjdaTTE3IDExSDdWMTNIMTdWMTFaTTE3IDE1SDdWMTdIMTdWMTVaIi8+Cjwvc3ZnPgo8L3N2Zz4="
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
                               {/* Product Image */}
                               <div className="w-full h-48 rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                 <img 
                                   src={item.image} 
                                   alt={`${item.title} by ${item.author}`}
                                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                   loading="lazy"
                                 />
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
