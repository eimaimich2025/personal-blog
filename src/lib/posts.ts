import { getAllPosts, getPostBySlug } from './posts-db';
import { processMarkdown } from './markdown';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getSortedPostsData(): Post[] {
  // Only run on server side
  if (typeof window !== 'undefined') {
    return [];
  }

  try {
    const posts = getAllPosts();
    return posts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostData(slug: string): Promise<Post> {
  const post = getPostBySlug(slug);
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  // Process the markdown content
  const processedContent = await processMarkdown(post.content);

  return {
    ...post,
    content: processedContent,
  };
}

export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map(post => post.slug);
}