// Fallback posts data when Supabase is not configured
export const fallbackPosts = [
  {
    id: 1,
    slug: 'i-love-yebob',
    title: 'I love yebob',
    date: '2024-12-12',
    excerpt: 'So so much',
    content: 'So so much',
    created_at: '2024-12-12T00:00:00Z',
    updated_at: '2024-12-12T00:00:00Z'
  },
  {
    id: 2,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    date: '2024-12-15',
    excerpt: 'Learn the fundamentals of Next.js and how to build modern web applications with React.',
    content: 'Learn the fundamentals of Next.js and how to build modern web applications with React. This comprehensive guide covers everything from setup to deployment.',
    created_at: '2024-12-15T00:00:00Z',
    updated_at: '2024-12-15T00:00:00Z'
  },
  {
    id: 3,
    slug: 'the-importance-of-continuous-learning',
    title: 'The Importance of Continuous Learning',
    date: '2024-12-20',
    excerpt: 'Why continuous learning is essential for personal and professional growth in the tech industry.',
    content: 'Why continuous learning is essential for personal and professional growth in the tech industry. In this rapidly evolving field, staying updated with new technologies and best practices is crucial for success.',
    created_at: '2024-12-20T00:00:00Z',
    updated_at: '2024-12-20T00:00:00Z'
  },
  {
    id: 4,
    slug: 'my-new-blog-post',
    title: 'My New Blog Post',
    date: '2024-12-25',
    excerpt: 'This is a sample blog post to demonstrate the functionality.',
    content: 'This is a sample blog post to demonstrate the functionality. You can edit this content through the admin panel.',
    created_at: '2024-12-25T00:00:00Z',
    updated_at: '2024-12-25T00:00:00Z'
  }
];

export interface Post {
  id?: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}
