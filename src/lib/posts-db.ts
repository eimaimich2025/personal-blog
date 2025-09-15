// Simple in-memory database for posts (resets on each deployment)
// In production, you'd want to use a real database like Supabase, PlanetScale, or MongoDB

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// In-memory storage (resets on each deployment)
let posts: Post[] = [
  {
    slug: 'i-love-yebob',
    title: 'I love yebob',
    date: '2024-12-12',
    excerpt: 'So so much',
    content: 'So so much'
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    date: '2024-12-15',
    excerpt: 'Learn the fundamentals of Next.js and how to build modern web applications with React.',
    content: 'Learn the fundamentals of Next.js and how to build modern web applications with React. This comprehensive guide covers everything from setup to deployment.'
  },
  {
    slug: 'the-importance-of-continuous-learning',
    title: 'The Importance of Continuous Learning',
    date: '2024-12-05',
    excerpt: 'Why continuous learning is essential in today\'s fast-paced world and how to make it a sustainable habit for personal growth.',
    content: 'Why continuous learning is essential in today\'s fast-paced world and how to make it a sustainable habit for personal growth. In this post, I explore the benefits and strategies for lifelong learning.'
  }
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function createPost(post: Omit<Post, 'slug'>): Post {
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  const newPost: Post = {
    ...post,
    slug
  };
  
  posts.push(newPost);
  return newPost;
}

export function updatePost(slug: string, updates: Partial<Omit<Post, 'slug'>>): Post | null {
  const index = posts.findIndex(post => post.slug === slug);
  if (index === -1) return null;
  
  const updatedPost = {
    ...posts[index],
    ...updates,
    slug: updates.title ? 
      updates.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 
      posts[index].slug
  };
  
  posts[index] = updatedPost;
  return updatedPost;
}

export function deletePost(slug: string): boolean {
  const index = posts.findIndex(post => post.slug === slug);
  if (index === -1) return false;
  
  posts.splice(index, 1);
  return true;
}
