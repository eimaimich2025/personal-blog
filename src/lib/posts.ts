import { getAllPosts, getPostBySlug, getAllPostSlugs } from './posts-supabase';
import { processMarkdown } from './markdown';

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

export async function getSortedPostsData(): Promise<Post[]> {
  try {
    const posts = await getAllPosts();
    return posts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostData(slug: string): Promise<Post> {
  const post = await getPostBySlug(slug);
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

export async function getAllPostSlugsFromDB(): Promise<string[]> {
  try {
    return await getAllPostSlugs();
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return [];
  }
}