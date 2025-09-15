import FadeInWrapper from '@/components/FadeInWrapper';

export default function Podcast() {
  const episodes = [
    {
      id: 1,
      title: "Building the Future with AI",
      guest: "Dr. Sarah Chen",
      date: "2024-01-15",
      description: "Exploring how artificial intelligence is reshaping entrepreneurship and what it means for the next generation of builders.",
      duration: "45:30",
      platforms: {
        spotify: "https://open.spotify.com/episode/example1",
        apple: "https://podcasts.apple.com/podcast/example1",
        youtube: "https://youtube.com/watch?v=example1"
      },
      highlights: [
        "The role of AI in democratizing entrepreneurship",
        "Building ethical AI products",
        "Future trends in AI development"
      ]
    },
    {
      id: 2,
      title: "From Idea to IPO: A Founder's Journey",
      guest: "Marcus Rodriguez",
      date: "2024-01-08",
      description: "Marcus shares his incredible journey from a college dropout to building a billion-dollar company, including the failures that shaped his success.",
      duration: "52:15",
      platforms: {
        spotify: "https://open.spotify.com/episode/example2",
        apple: "https://podcasts.apple.com/podcast/example2",
        youtube: "https://youtube.com/watch?v=example2"
      },
      highlights: [
        "The importance of failing fast and learning faster",
        "Building company culture in hypergrowth",
        "Lessons from raising $50M in Series A"
      ]
    },
    {
      id: 3,
      title: "The Psychology of Success",
      guest: "Dr. Emily Watson",
      date: "2024-01-01",
      description: "A deep dive into the mental frameworks and habits that separate successful entrepreneurs from the rest.",
      duration: "38:45",
      platforms: {
        spotify: "https://open.spotify.com/episode/example3",
        apple: "https://podcasts.apple.com/podcast/example3",
        youtube: "https://youtube.com/watch?v=example3"
      },
      highlights: [
        "The growth mindset in business",
        "Managing stress and burnout",
        "Building resilience through adversity"
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
              MPods
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Conversations with innovators, entrepreneurs, and thought leaders who are building the future. 
              Join me as we explore the ideas, strategies, and mindsets that drive success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://open.spotify.com/show/example"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button pill-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
              <a
                href="https://podcasts.apple.com/podcast/example"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button pill-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 17v-6H7v-2h4V7h2v2h4v2h-4v6h-2z"/>
                </svg>
                Apple Podcasts
              </a>
              <a
                href="https://youtube.com/@example"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button pill-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </FadeInWrapper>
        </div>

        {/* Episodes Section */}
        <div className="space-y-8">
          {episodes.map((episode, index) => (
            <FadeInWrapper key={episode.id} delay={index * 100}>
              <div className="glass rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Episode Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Episode {episode.id}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {new Date(episode.date).toLocaleDateString()}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {episode.duration}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {episode.title}
                    </h2>
                    
                    <p className="text-purple-400 text-lg mb-4">
                      with {episode.guest}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {episode.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Key Highlights:</h3>
                      <ul className="space-y-2">
                        {episode.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Platform Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={episode.platforms.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Spotify
                      </a>
                      <a
                        href={episode.platforms.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 17v-6H7v-2h4V7h2v2h4v2h-4v6h-2z"/>
                        </svg>
                        Apple
                      </a>
                      <a
                        href={episode.platforms.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </a>
                    </div>
                  </div>

                  {/* Episode Artwork Placeholder */}
                  <div className="lg:w-64 lg:flex-shrink-0">
                    <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <p className="text-white font-semibold">MPods</p>
                        <p className="text-white/80 text-sm">Episode {episode.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWrapper>
          ))}
        </div>

        {/* Coming Soon Section */}
        <FadeInWrapper delay={400}>
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">More Episodes Coming Soon</h3>
              <p className="text-gray-300 mb-6">
                I'm constantly recording new conversations with amazing people. 
                Subscribe to stay updated on the latest episodes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://open.spotify.com/show/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button pill-primary"
                >
                  Subscribe on Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/podcast/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button pill-secondary"
                >
                  Subscribe on Apple
                </a>
              </div>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}
