'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="glass-dark border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light text-purple-300/20 hover:text-purple-300/40 transition-all duration-300">
              <span>Eric Imai</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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
            <Link href="/prompts" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Prompts</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/admin" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 relative group">
              <span>Admin</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 mb-4">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link 
                href="/podcast" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Podcast
              </Link>
              <Link 
                href="/store" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Store
              </Link>
              <Link 
                href="/prompts" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Prompts
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link 
                href="/admin" 
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 rounded-md transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}