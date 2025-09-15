import FadeInWrapper from '@/components/FadeInWrapper';

export default function About() {
  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started my journey in tech as a curious college student, fascinated by how code could create anything.",
      milestone: "First line of code",
      color: "blue"
    },
    {
      year: "2017",
      title: "First Startup",
      description: "Co-founded my first startup, a social media analytics tool. Learned that building a product is only 20% of the battle.",
      milestone: "First business failure",
      color: "red"
    },
    {
      year: "2019",
      title: "The Pivot",
      description: "After the failure, I spent a year learning about business, marketing, and customer development. This changed everything.",
      milestone: "Major mindset shift",
      color: "yellow"
    },
    {
      year: "2020",
      title: "AI Awakening",
      description: "Discovered the potential of AI and machine learning. Started building tools that could think and learn.",
      milestone: "First AI project",
      color: "purple"
    },
    {
      year: "2022",
      title: "Breakthrough",
      description: "Launched my first successful AI-powered product. Finally understood what it means to solve real problems for real people.",
      milestone: "First profitable business",
      color: "green"
    },
    {
      year: "2024",
      title: "The Future",
      description: "Building the next generation of AI tools while sharing everything I learn along the way.",
      milestone: "Current mission",
      color: "pink"
    }
  ];

  const currentWork = [
    {
      title: "AI-Powered Learning Platform",
      description: "Building tools that make high-quality education accessible to everyone through personalized AI tutoring.",
      status: "In Development",
      impact: "High"
    },
    {
      title: "MPods Podcast",
      description: "Hosting conversations with innovators and entrepreneurs who are building the future.",
      status: "Active",
      impact: "Medium"
    },
    {
      title: "Content Creation",
      description: "Sharing insights, lessons, and resources to help others on their entrepreneurial journey.",
      status: "Active",
      impact: "High"
    }
  ];

  const futureAspirations = [
    "Build a billion-dollar AI company that genuinely improves human life",
    "Create a global community of entrepreneurs and innovators",
    "Develop educational tools that make world-class learning accessible to everyone",
    "Write a book about the intersection of AI and entrepreneurship",
    "Speak at major conferences about the future of work and technology"
  ];

  const values = [
    {
      title: "Continuous Learning",
      description: "I believe the day you stop learning is the day you start dying. Every challenge is an opportunity to grow.",
      icon: "📚"
    },
    {
      title: "Authentic Sharing",
      description: "I share both successes and failures because real growth happens when we're honest about our journey.",
      icon: "💬"
    },
    {
      title: "Human-Centered Technology",
      description: "Technology should amplify human potential, not replace human connection. Every tool I build serves this purpose.",
      icon: "🤝"
    },
    {
      title: "Community First",
      description: "No one builds anything meaningful alone. I believe in the power of community and collaboration.",
      icon: "🌍"
    }
  ];

  return (
    <div className="cinematic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <FadeInWrapper>
            <h1 className="text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              I'm an entrepreneur, AI enthusiast, and lifelong learner on a mission to build 
              technology that amplifies human potential. Here's my story, my values, and what 
              I'm working on today.
            </p>
          </FadeInWrapper>
        </div>

        {/* Current Status */}
        <FadeInWrapper delay={100}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What I'm Building Now
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My current projects and focus areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentWork.map((work, index) => (
                <FadeInWrapper key={work.title} delay={index * 100}>
                  <div className="glass rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {work.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        work.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {work.status}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {work.description}
                    </p>
                    <div className="mt-4 text-sm text-purple-400">
                      Impact: {work.impact}
                    </div>
                  </div>
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* Interactive Timeline */}
        <FadeInWrapper delay={200}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                My Journey
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                The key milestones that shaped who I am today
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <FadeInWrapper key={event.year} delay={index * 100}>
                    <div className="relative flex items-start">
                      {/* Timeline Dot */}
                      <div className={`w-16 h-16 bg-${event.color}-500 rounded-full flex items-center justify-center z-10 relative`}>
                        <span className="text-white font-bold text-sm">{event.year}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="ml-8 flex-1">
                        <div className="glass rounded-xl p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-white">
                              {event.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${event.color}-500/20 text-${event.color}-400`}>
                              {event.milestone}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeInWrapper>
                ))}
              </div>
            </div>
          </div>
        </FadeInWrapper>

        {/* Values */}
        <FadeInWrapper delay={300}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Drives Me
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                The principles and values that guide my decisions and actions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <FadeInWrapper key={value.title} delay={index * 100}>
                  <div className="glass rounded-xl p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* Future Aspirations */}
        <FadeInWrapper delay={400}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Future Vision
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Where I see myself and my work heading
              </p>
            </div>

            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <ul className="space-y-4">
                {futureAspirations.map((aspiration, index) => (
                  <FadeInWrapper key={index} delay={index * 100}>
                    <li className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-300 text-lg">{aspiration}</span>
                    </li>
                  </FadeInWrapper>
                ))}
              </ul>
            </div>
          </div>
        </FadeInWrapper>

        {/* Music Integration */}
        <FadeInWrapper delay={500}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What I'm Listening To
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Music fuels my creativity and keeps me focused. Here's what's currently on my playlist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Current Favorites</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Lofi Hip Hop</span>
                    <span className="text-purple-400 text-sm">Focus Sessions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Indie Electronic</span>
                    <span className="text-purple-400 text-sm">Creative Work</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Jazz</span>
                    <span className="text-purple-400 text-sm">Relaxation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Ambient</span>
                    <span className="text-purple-400 text-sm">Deep Thinking</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Listen With Me</h3>
                <div className="space-y-4">
                  <a
                    href="https://open.spotify.com/user/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-green-600/20 border border-green-500/30 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <span className="text-white">Spotify Playlist</span>
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                  <a
                    href="https://music.apple.com/profile/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-800/20 border border-gray-500/30 rounded-lg hover:bg-gray-800/30 transition-colors"
                  >
                    <span className="text-white">Apple Music</span>
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 17v-6H7v-2h4V7h2v2h4v2h-4v6h-2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInWrapper>

        {/* Call to Action */}
        <FadeInWrapper delay={600}>
          <div className="text-center">
            <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in meeting new people who share my passion for building 
                the future. Whether you want to collaborate, share ideas, or just say hello, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="pill-button pill-primary"
                >
                  Get in Touch
                </a>
                <a
                  href="/blog"
                  className="pill-button pill-secondary"
                >
                  Read My Blog
                </a>
              </div>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}