import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/posts-db';

export async function GET() {
  try {
    const posts = getAllPosts();
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

    const newPost = createPost({
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
      { error: 'Failed to create post', details: error.message },
      { status: 500 }
    );
  }
}