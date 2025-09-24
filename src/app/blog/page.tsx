import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import FadeInWrapper from '@/components/FadeInWrapper';

// Force dynamic rendering to ensure fresh data from Supabase
export const dynamic = 'force-dynamic';

export default async function Blog() {
  const posts = await getSortedPostsData();
  
  // Categories based on actual content
  const categories = [
    { name: 'Entrepreneurship', count: 2, color: 'purple' },
    { name: 'AI & Technology', count: 1, color: 'blue' },
    { name: 'Personal Growth', count: 2, color: 'green' },
    { name: 'Productivity', count: 1, color: 'yellow' },
    { name: 'Reflections', count: 1, color: 'pink' }
  ];

  const tags = [
    'Startup Lessons', 'AI Tools', 'Mindset', 'Productivity', 'Leadership', 
    'Marketing', 'Learning', 'Failure', 'Success', 'Innovation', 'Strategy', 'Execution'
  ];

  const featuredPost = posts[0]; // Get the latest post as featured

  return (
    <div className="cinematic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <FadeInWrapper>
            <h1 className="text-5xl font-bold text-white mb-6">
              The Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, lessons, and reflections from my journey as an entrepreneur, 
              builder, and lifelong learner. Real stories, practical advice, and 
              honest thoughts on building the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-medium">5 Topics</span>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2">
                <span className="text-green-400 font-medium">Personal Insights</span>
              </div>
            </div>
          </FadeInWrapper>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <FadeInWrapper delay={100}>
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Featured Article
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  My latest thoughts and insights
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="glass rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Latest Post
                    </span>
                    <span className="text-gray-400 ml-4">
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Entrepreneurship</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Lessons</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">Personal Growth</span>
                  </div>
                  <a
                    href={`/posts/${featuredPost.slug}`}
                    className="pill-button pill-primary"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeInWrapper>
        )}

        {/* Categories */}
        <FadeInWrapper delay={200}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Find content that matches your interests
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <FadeInWrapper key={category.name} delay={index * 100}>
                  <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className={`w-12 h-12 bg-${category.color}-500 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-xl">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.count} articles
                    </p>
                  </div>
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* All Posts */}
        <FadeInWrapper delay={300}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                All Articles
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Every insight, lesson, and story from my journey
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
                  <p className="text-gray-300 text-lg">Articles are brewing...</p>
                  <p className="text-gray-400 mt-2">Check back soon for amazing content!</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <FadeInWrapper key={post.slug} delay={index * 100}>
                    <PostCard post={post} />
                  </FadeInWrapper>
                ))}
              </div>
            )}
          </div>
        </FadeInWrapper>

        {/* Popular Tags */}
        <FadeInWrapper delay={400}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Popular Tags
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Explore topics that interest you most
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {tags.map((tag, index) => (
                <FadeInWrapper key={tag} delay={index * 50}>
                  <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </FadeInWrapper>

        {/* Newsletter Signup */}
        <FadeInWrapper delay={500}>
          <div className="text-center">
            <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get my latest articles, insights, and resources delivered straight to your inbox. 
                No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="pill-button pill-primary">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Get insights delivered to your inbox
              </p>
            </div>
          </div>
        </FadeInWrapper>
      </div>
    </div>
  );
}
