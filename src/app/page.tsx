'use client';

import { useState, useEffect } from 'react';
import PostCard from '@/components/PostCard';
import AtmosphericBackground from '@/components/AtmosphericBackground';
import FadeInWrapper from '@/components/FadeInWrapper';
import Link from 'next/link';

interface Post {
  id?: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    
    // Refresh posts every 5 seconds for real-time updates
    const interval = setInterval(fetchPosts, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const featuredPost = posts[0]; // Get the latest post as featured

  return (
    <div className="cinematic-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
        {/* Atmospheric Background */}
        <AtmosphericBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInWrapper>
            <h1 className="hero-title mb-8">
              I'm Building the Future
              <span className="gradient-text block">One Idea at a Time</span>
            </h1>
            <p className="hero-subtitle mb-12 max-w-3xl mx-auto">
              Entrepreneur, AI enthusiast, and lifelong learner sharing insights on building businesses, 
              embracing technology, and living with intention. Join me as I document the journey of 
              turning ideas into reality.
            </p>
            
            {/* Quick Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <Link href="/blog" className="pill-button pill-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Blog
              </Link>
              <Link href="/podcast" className="pill-button pill-secondary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Podcast
              </Link>
              <Link href="/store" className="pill-button pill-secondary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Store
              </Link>
              <Link href="/prompts" className="pill-button pill-secondary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Prompts
              </Link>
            </div>
          </FadeInWrapper>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 animate-pulse blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 animate-pulse blur-sm" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse blur-sm" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Insight
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                My latest thoughts on building, learning, and growing
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FadeInWrapper>
                <div className="glass rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Latest Post
                    </span>
                    <span className="text-gray-400 ml-4">
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/posts/${featuredPost.slug}`}
                    className="pill-button pill-primary"
                  >
                    Read Full Post
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </FadeInWrapper>
            </div>
          </div>
        </section>
      )}

      {/* Quick Access Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore My World
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dive into different aspects of my journey and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <FadeInWrapper delay={100}>
              <Link href="/blog" className="feature-card group h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">Blog</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">Insights on entrepreneurship, AI, and life lessons from my journey</p>
                  <div className="flex items-center justify-center text-purple-400 text-sm font-semibold group-hover:text-purple-300 transition-colors">
                    <span>Read Articles</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInWrapper>
            
            <FadeInWrapper delay={200}>
              <Link href="/podcast" className="feature-card group h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">Podcast</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">MPods episodes and conversations with innovators</p>
                  <div className="flex items-center justify-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                    <span>Listen Now</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInWrapper>
            
            <FadeInWrapper delay={300}>
              <Link href="/store" className="feature-card group h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">Store</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">Curated tools, books, and resources I use daily</p>
                  <div className="flex items-center justify-center text-green-400 text-sm font-semibold group-hover:text-green-300 transition-colors">
                    <span>Browse Store</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInWrapper>

            <FadeInWrapper delay={400}>
              <Link href="/prompts" className="feature-card group h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">Prompts</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">AI prompt library and productivity tools</p>
                  <div className="flex items-center justify-center text-yellow-400 text-sm font-semibold group-hover:text-yellow-300 transition-colors">
                    <span>Explore Prompts</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInWrapper>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="posts" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fresh perspectives and timeless wisdom from my journey
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="glass-dark rounded-2xl p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">Insights are brewing...</p>
                <p className="text-gray-400 mt-2">Check back soon for amazing content!</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post, index) => (
                <FadeInWrapper key={post.slug} delay={index * 100}>
                  <PostCard post={post} />
                </FadeInWrapper>
              ))}
            </div>
          )}

          {posts.length > 6 && (
            <div className="text-center mt-12">
              <Link href="/blog" className="pill-button pill-secondary">
                View All Posts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}