import FadeInWrapper from '@/components/FadeInWrapper';

export default function Podcast() {
  const episodes = [
    {
      id: 32,
      title: "Nosa Edoimioya, Co-Founder of Reforge Robotics: The Future of Autonomous Manufacturing",
      guest: "Nosa Edoimioya",
      date: "2024-11-17",
      description: "Nosa Edoimioya shares his journey building Reforge Robotics, turning down Amazon, and securing $500K funding while navigating the challenges of autonomous manufacturing.",
      duration: "45:00",
      platforms: {
        spotify: "https://open.spotify.com/episode/example2",
        apple: "https://podcasts.apple.com/podcast/example2",
        youtube: "https://youtube.com/watch?v=L8oAL59iQig"
      },
      highlights: [
        "Why he turned down Amazon Robotics to pursue his vision",
        "How he secured $500K funding and fellowship simultaneously",
        "The technical challenges of supercharging industrial robots"
      ],
      videoId: "L8oAL59iQig"
    },
    {
      id: 29,
      title: "Jonah Liss, MeetYourClass Co-Founder",
      guest: "Jonah Liss",
      date: "2025-03-15",
      description: "Jonah Liss discusses building Meet Your Class to help students connect before college, early validation, and how social media is changing school selection.",
      duration: "45:00",
      platforms: {
        spotify: "https://open.spotify.com/episode/example3",
        apple: "https://podcasts.apple.com/podcast/example3",
        youtube: "https://youtube.com/watch?v=rP9kCMltO10"
      },
      highlights: [
        "How he's revolutionizing student connections before campus arrival",
        "The power of conviction in early-stage entrepreneurship",
        "Why early validation shaped their business model"
      ],
      videoId: "rP9kCMltO10"
    },
    {
      id: 30,
      title: "Don Hicks, Founder & CEO of Optilogic, The Entrepreneur Behind LLamasoft's $400M Exit",
      guest: "Don Hicks",
      date: "2025-03-17",
      description: "Don Hicks shares his journey from startup founder to selling LLamasoft for $400M, discussing leadership and why people matter more than profits.",
      duration: "59:00",
      platforms: {
        spotify: "https://open.spotify.com/episode/example1",
        apple: "https://podcasts.apple.com/podcast/example1",
        youtube: "https://youtube.com/watch?v=avuWBkWQwgE"
      },
      highlights: [
        "How he built LLamasoft from startup to successful acquisition",
        "His approach to leadership and creating strong company culture",
        "Why people and ethics matter more than profit margins"
      ],
      videoId: "avuWBkWQwgE"
    },
    {
      id: 21,
      title: "Curing Cancer: Dr. Mukesh Nyati on Modern Oncology",
      guest: "Dr. Mukesh Nyati",
      date: "2024-07-03",
      description: "Dr. Mukesh Nyati discusses his groundbreaking cancer research at the University of Michigan, covering early diagnosis, personalized medicine, and AI in oncology.",
      duration: "45:00",
      platforms: {
        spotify: "https://open.spotify.com/episode/example4",
        apple: "https://podcasts.apple.com/podcast/example4",
        youtube: "https://youtube.com/watch?v=dWcikUImV4c"
      },
      highlights: [
        "His groundbreaking work on EGFR inhibitors for cancer treatment",
        "Why early diagnosis is critical in modern oncology",
        "How AI is advancing cancer research and treatment"
      ],
      videoId: "dWcikUImV4c"
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

        {/* Featured Video Section */}
        <FadeInWrapper delay={200}>
          <div className="glass rounded-2xl p-8 mb-12">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Episode</h2>
              <p className="text-gray-300 text-lg">Watch our latest conversation</p>
            </div>
            
            {/* YouTube Video Embed */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/avuWBkWQwgE?si=Foaara4B3fKtuEf2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            
            {/* Video Description */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Featured: Don Hicks on life and work</h3>
              <p className="text-gray-300">
                Learn from the Ross alum who built and sold LLamasoft, sharing insights on leadership, company culture, and why people matter more than profits in business.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        {/* Episodes Section */}
        <div className="space-y-8">
          {episodes.map((episode, index) => (
            <FadeInWrapper key={episode.id} delay={index * 100}>
              <div className="glass rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Episode Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        EP{episode.id}
                      </span>
                      <span className="text-gray-300 text-sm font-medium">
                        {new Date(episode.date).toLocaleDateString()}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {episode.duration}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {episode.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-base">
                      {episode.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Key Takeaways:</h3>
                      <ul className="space-y-2">
                        {episode.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-gray-200 text-sm leading-relaxed font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Platforms */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400">Also available on:</span>
                      <a
                        href={episode.platforms.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        Spotify
                      </a>
                      <a
                        href={episode.platforms.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        Apple Podcasts
                      </a>
                    </div>
                  </div>

                  {/* Episode Video/Artwork */}
                  <div className="lg:w-[28rem] lg:flex-shrink-0 flex items-center">
                    {episode.videoId ? (
                      <div className="w-full h-96 rounded-xl overflow-hidden">
                        {episode.id === 21 ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${episode.videoId}?si=Foaara4B3fKtuEf2&rel=0&showinfo=0&modestbranding=1&start=10`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        ) : (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${episode.videoId}?si=Foaara4B3fKtuEf2&rel=0&showinfo=0&modestbranding=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                          <p className="text-white font-semibold">MPods</p>
                          <p className="text-white/80 text-sm">EP{episode.id}</p>
                        </div>
                      </div>
                    )}
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
