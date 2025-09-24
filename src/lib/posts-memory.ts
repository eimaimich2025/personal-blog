// In-memory storage that persists during the serverless function's lifetime
// This is a simple solution that works with Vercel's serverless architecture

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

// Global variable to store posts in memory
let posts: Post[] = [
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

// Get all posts
export function getAllPosts(): Post[] {
  return [...posts]; // Return a copy to prevent mutations
}

// Get single post by slug
export function getPostBySlug(slug: string): Post | null {
  return posts.find(post => post.slug === slug) || null;
}

// Create new post
export function createPost(postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Post {
  const newPost: Post = {
    ...postData,
    id: Math.max(...posts.map(p => p.id || 0)) + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  posts.unshift(newPost); // Add to beginning of array
  return newPost;
}

// Update existing post
export function updatePost(slug: string, postData: Partial<Omit<Post, 'id' | 'slug' | 'created_at' | 'updated_at'>>): Post {
  const postIndex = posts.findIndex(post => post.slug === slug);
  if (postIndex === -1) {
    throw new Error('Post not found');
  }
  
  const updatedPost = {
    ...posts[postIndex],
    ...postData,
    updated_at: new Date().toISOString()
  };
  posts[postIndex] = updatedPost;
  return updatedPost;
}

// Delete post
export function deletePost(slug: string): boolean {
  const postIndex = posts.findIndex(post => post.slug === slug);
  if (postIndex === -1) {
    return false;
  }
  
  posts.splice(postIndex, 1);
  return true;
}

// Get all post slugs
export function getAllPostSlugs(): string[] {
  return posts.map(post => post.slug);
}

