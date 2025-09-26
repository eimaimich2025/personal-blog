import { createClient } from '@supabase/supabase-js';

// Your Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Posts data from your persistent memory
const posts = [
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

async function populateSupabase() {
  console.log('🚀 Starting Supabase population...');
  
  try {
    // First, check if posts already exist
    const { data: existingPosts, error: fetchError } = await supabase
      .from('posts')
      .select('slug');
    
    if (fetchError) {
      console.error('Error fetching existing posts:', fetchError);
      return;
    }
    
    const existingSlugs = new Set(existingPosts?.map(p => p.slug) || []);
    console.log(`Found ${existingSlugs.size} existing posts`);
    
    // Insert posts that don't exist
    const postsToInsert = posts.filter(post => !existingSlugs.has(post.slug));
    
    if (postsToInsert.length === 0) {
      console.log('✅ All posts already exist in Supabase');
      return;
    }
    
    console.log(`📝 Inserting ${postsToInsert.length} new posts...`);
    
    const { data, error } = await supabase
      .from('posts')
      .insert(postsToInsert)
      .select();
    
    if (error) {
      console.error('❌ Error inserting posts:', error);
      return;
    }
    
    console.log('✅ Successfully populated Supabase with posts!');
    console.log('Inserted posts:', data?.map(p => p.slug));
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the population
populateSupabase();
