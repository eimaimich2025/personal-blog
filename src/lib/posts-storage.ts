// Simple file-based storage for posts that works with Vercel
import fs from 'fs';
import path from 'path';

const STORAGE_FILE = path.join(process.cwd(), 'data', 'posts.json');

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(STORAGE_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read posts from file
export const readPosts = () => {
  try {
    ensureDataDir();
    if (fs.existsSync(STORAGE_FILE)) {
      const data = fs.readFileSync(STORAGE_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading posts from file:', error);
  }
  
  // Return default posts if file doesn't exist or error
  return [
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
};

// Write posts to file
export const writePosts = (posts: any[]) => {
  try {
    ensureDataDir();
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(posts, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing posts to file:', error);
    return false;
  }
};

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

