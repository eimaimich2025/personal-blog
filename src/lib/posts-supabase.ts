import { supabase, Post } from './supabase';
import { getAllPosts as getGlobalPosts, getPostBySlug as getGlobalPostBySlug, createPost as createGlobalPost, updatePost as updateGlobalPost, deletePost as deleteGlobalPost, getAllPostSlugs as getGlobalPostSlugs } from './posts-global';
import { getAllPosts as getFilePosts, getPostBySlug as getFilePostBySlug, createPost as createFilePost, updatePost as updateFilePost, deletePost as deleteFilePost, getAllPostSlugs as getFilePostSlugs } from './posts-file';

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using file storage');
    return getFilePosts();
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return getFilePosts();
  }

  return data || getFilePosts();
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using file storage');
    return getFilePostBySlug(slug);
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return getFilePostBySlug(slug);
  }

  return data;
}

// Create new post
export async function createPost(postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using file storage for creation');
    return createFilePost(postData);
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
    console.log('Supabase not configured, using file storage for update');
    return updateFilePost(slug, postData);
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
    console.log('Supabase not configured, using file storage for deletion');
    return deleteFilePost(slug);
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
    console.log('Supabase not configured, using file storage');
    return getFilePostSlugs();
  }

  const { data, error } = await supabase
    .from('posts')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs:', error);
    return getFilePostSlugs();
  }

  return data?.map(post => post.slug) || getFilePostSlugs();
}
