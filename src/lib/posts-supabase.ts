import { supabase, Post } from './supabase';
import { getAllPosts as getGlobalPosts, getPostBySlug as getGlobalPostBySlug, createPost as createGlobalPost, updatePost as updateGlobalPost, deletePost as deleteGlobalPost, getAllPostSlugs as getGlobalPostSlugs } from './posts-global';
import { getAllPosts as getPersistentPosts, getPostBySlug as getPersistentPostBySlug, createPost as createPersistentPost, updatePost as updatePersistentPost, deletePost as deletePersistentPost, getAllPostSlugs as getPersistentPostSlugs } from './posts-memory-persistent';

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  // Force using persistent memory for now to avoid Supabase issues
  return false;
  // const hasUrl = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
  // const hasKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key';
  // return !!(supabase && hasUrl && hasKey);
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  // Always use persistent memory storage for now
  console.log('Using persistent memory storage for posts');
  return getPersistentPosts();
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using persistent memory storage');
    return getPersistentPostBySlug(slug);
  }

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching post from Supabase:', error);
      console.log('Falling back to persistent memory storage');
      return getPersistentPostBySlug(slug);
    }

    return data;
  } catch (error) {
    console.error('Exception fetching post from Supabase:', error);
    console.log('Falling back to persistent memory storage');
    return getPersistentPostBySlug(slug);
  }
}

// Create new post
export async function createPost(postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using persistent memory storage for creation');
    return createPersistentPost(postData);
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
    console.log('Supabase not configured, using persistent memory storage for update');
    return updatePersistentPost(slug, postData);
  }

  try {
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
      console.error('Error updating post in Supabase:', error);
      console.log('Falling back to persistent memory storage');
      return updatePersistentPost(slug, postData);
    }

    return data;
  } catch (error) {
    console.error('Exception updating post in Supabase:', error);
    console.log('Falling back to persistent memory storage');
    return updatePersistentPost(slug, postData);
  }
}

// Delete post
export async function deletePost(slug: string): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using persistent memory storage for deletion');
    return deletePersistentPost(slug);
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
    console.log('Supabase not configured, using persistent memory storage');
    return getPersistentPostSlugs();
  }

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('slug');

    if (error) {
      console.error('Error fetching slugs from Supabase:', error);
      console.log('Falling back to persistent memory storage');
      return getPersistentPostSlugs();
    }

    return data?.map(post => post.slug) || getPersistentPostSlugs();
  } catch (error) {
    console.error('Exception fetching slugs from Supabase:', error);
    console.log('Falling back to persistent memory storage');
    return getPersistentPostSlugs();
  }
}
