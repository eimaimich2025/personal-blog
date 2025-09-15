import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/posts-supabase';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error reading posts:', error);
    return NextResponse.json(
      { error: 'Failed to read posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, date, excerpt, content } = await request.json();

    console.log('Creating post:', { title, date, excerpt });

    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const newPost = await createPost({
      slug,
      title,
      date,
      excerpt,
      content
    });

    return NextResponse.json({ 
      success: true, 
      slug: newPost.slug,
      message: 'Post created successfully' 
    });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}