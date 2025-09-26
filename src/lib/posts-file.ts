import { promises as fs } from 'fs';
import path from 'path';

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

const POSTS_FILE = path.join(process.cwd(), 'data', 'posts.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(POSTS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Default posts data
const defaultPosts: Post[] = [
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

// Read posts from file
async function readPosts(): Promise<Post[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(POSTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Posts file not found, using default posts');
    return defaultPosts;
  }
}

// Write posts to file
async function writePosts(posts: Post[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  return await readPosts();
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await readPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Create new post
export async function createPost(postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  const posts = await readPosts();
  const newPost: Post = {
    ...postData,
    id: Math.max(...posts.map(p => p.id || 0), 0) + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  posts.unshift(newPost);
  await writePosts(posts);
  return newPost;
}

// Update existing post
export async function updatePost(slug: string, postData: Partial<Omit<Post, 'id' | 'created_at' | 'updated_at'>>): Promise<Post> {
  const posts = await readPosts();
  const postIndex = posts.findIndex(post => post.slug === slug);
  
  if (postIndex === -1) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  
  const updatedPost = {
    ...posts[postIndex],
    ...postData,
    updated_at: new Date().toISOString()
  };
  
  // If slug is being updated, check for conflicts
  if (postData.slug && postData.slug !== slug) {
    const existingPostWithNewSlug = posts.find(post => post.slug === postData.slug && post.id !== posts[postIndex].id);
    if (existingPostWithNewSlug) {
      throw new Error(`A post with slug "${postData.slug}" already exists`);
    }
  }
  
  posts[postIndex] = updatedPost;
  await writePosts(posts);
  return updatedPost;
}

// Delete post
export async function deletePost(slug: string): Promise<boolean> {
  const posts = await readPosts();
  const postIndex = posts.findIndex(post => post.slug === slug);
  
  if (postIndex === -1) {
    return false;
  }
  
  posts.splice(postIndex, 1);
  await writePosts(posts);
  return true;
}

// Get all post slugs
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await readPosts();
  return posts.map(post => post.slug);
}

