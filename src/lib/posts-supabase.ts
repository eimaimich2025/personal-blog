import { supabase, Post } from './supabase';
import { readPosts, writePosts } from './posts-storage';

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using file storage');
    return readPosts();
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return readPosts();
  }

  return data || readPosts();
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using file storage');
    const posts = readPosts();
    return posts.find(post => post.slug === slug) || null;
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    const posts = readPosts();
    return posts.find(post => post.slug === slug) || null;
  }

  return data;
}

// Create new post
export async function createPost(postData: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using file storage for creation');
    const posts = readPosts();
    const newPost: Post = {
      ...postData,
      id: Math.max(...posts.map(p => p.id || 0)) + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    posts.unshift(newPost); // Add to beginning of array
    writePosts(posts);
    return newPost;
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
    const posts = readPosts();
    const postIndex = posts.findIndex(post => post.slug === slug);
    if (postIndex === -1) {
      throw new Error('Post not found');
    }
    
    // Update the post in the array
    const updatedPost = {
      ...posts[postIndex],
      ...postData,
      updated_at: new Date().toISOString()
    };
    posts[postIndex] = updatedPost;
    writePosts(posts);
    return updatedPost;
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
    const posts = readPosts();
    const postIndex = posts.findIndex(post => post.slug === slug);
    if (postIndex === -1) {
      return false;
    }
    
    // Remove the post from the array
    posts.splice(postIndex, 1);
    writePosts(posts);
    return true;
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
    const posts = readPosts();
    return posts.map(post => post.slug);
  }

  const { data, error } = await supabase
    .from('posts')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs:', error);
    const posts = readPosts();
    return posts.map(post => post.slug);
  }

  return data?.map(post => post.slug) || readPosts().map(post => post.slug);
}
