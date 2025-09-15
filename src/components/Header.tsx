import Link from 'next/link';

export default function Header() {
  return (
    <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300">
              <span className="gradient-text">Eric's Universe</span>
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/podcast" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Podcast</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/store" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Store</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/lessons" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Lessons</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/prompts" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Prompts</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {process.env.NODE_ENV === 'development' && (
              <Link href="/admin" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 relative group">
                <span>Admin</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </nav>
          <div className="lg:hidden">
            <button className="text-gray-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}