'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MarkdownEditor from '@/components/MarkdownEditor';
import ProtectedRoute from '@/components/ProtectedRoute';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function EditPostPage({ params }: PostPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    excerpt: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        const resolvedParams = await params;
        setSlug(resolvedParams.slug);
        const response = await fetch(`/api/posts/${resolvedParams.slug}`);
        if (response.ok) {
          const post = await response.json();
          setFormData({
            title: post.title,
            date: post.date,
            excerpt: post.excerpt,
            content: post.content
          });
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple test - just show success for now to bypass any issues
    console.log('=== POST UPDATE TEST ===');
    console.log('Slug:', slug);
    console.log('Form Data:', formData);
    
    try {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('=== RESPONSE DEBUG ===');
      console.log('Status:', response.status);
      console.log('OK:', response.ok);
      console.log('Status Text:', response.statusText);
      
      // Get response text first to see what we're actually getting
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      if (response.ok) {
        try {
          const result = JSON.parse(responseText);
          console.log('Parsed result:', result);
          alert('✅ Post updated successfully!');
          router.push('/admin');
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          console.log('Response was not valid JSON, but status was OK');
          alert('✅ Post updated successfully! (Non-JSON response)');
          router.push('/admin');
        }
      } else {
        console.error('❌ Response not OK:', response.status, response.statusText);
        console.error('Response body:', responseText);
        alert(`❌ Failed to update post. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      alert('❌ Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return (
      <div className="cinematic-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="cinematic-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Edit Post</h1>
          <p className="text-gray-300 mt-2">Update your blog post</p>
        </div>

        <div className="glass rounded-2xl">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter post title"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Brief description of the post"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                Content (Markdown)
              </label>
              <MarkdownEditor
                value={formData.content}
                onChange={(value) => setFormData({ ...formData, content: value })}
                placeholder="Write your post content in Markdown..."
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Link
                href="/admin"
                className="pill-button pill-secondary"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="pill-button pill-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Updating...' : 'Update Post'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <Link
            href="/admin"
            className="pill-button pill-secondary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Admin
          </Link>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}