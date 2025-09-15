import { supabase, Post } from './supabase';
import { fallbackPosts } from './posts-fallback';

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using fallback data');
    return fallbackPosts;
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return fallbackPosts;
  }

  return data || fallbackPosts;
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using fallback data');
    return fallbackPosts.find(post => post.slug === slug) || null;
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return fallbackPosts.find(post => post.slug === slug) || null;
  }

  return data;
}

// Create new post
export async function createPost(postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, cannot create posts in fallback mode');
    throw new Error('Database not configured. Please set up Supabase to create posts.');
  }

  const { data, error } = await supabase
    .from('posts')
    .insert([postData])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }

  return data;
}

// Update existing post
export async function updatePost(slug: string, postData: Partial<Omit<Post, 'id' | 'slug' | 'created_at' | 'updated_at'>>): Promise<Post> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, cannot update posts in fallback mode');
    throw new Error('Database not configured. Please set up Supabase to update posts.');
  }

  const { data, error } = await supabase
    .from('posts')
    .update({
      ...postData,
      updated_at: new Date().toISOString()
    })
    .eq('slug', slug)
    .select()
    .single();

  if (error) {
    console.error('Error updating post:', error);
    throw new Error('Failed to update post');
  }

  return data;
}

// Delete post
export async function deletePost(slug: string): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, cannot delete posts in fallback mode');
    throw new Error('Database not configured. Please set up Supabase to delete posts.');
  }

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('slug', slug);

  if (error) {
    console.error('Error deleting post:', error);
    return false;
  }

  return true;
}

// Get all post slugs
export async function getAllPostSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using fallback data');
    return fallbackPosts.map(post => post.slug);
  }

  const { data, error } = await supabase
    .from('posts')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs:', error);
    return fallbackPosts.map(post => post.slug);
  }

  return data?.map(post => post.slug) || fallbackPosts.map(post => post.slug);
}
