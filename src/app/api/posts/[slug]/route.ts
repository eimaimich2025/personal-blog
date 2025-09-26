import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug, updatePost, deletePost } from '@/lib/posts-supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const response = NextResponse.json(post);
    
    // Disable caching to ensure fresh data
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error reading post:', error);
    return NextResponse.json(
      { error: 'Failed to read post' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    console.log('=== PUT REQUEST START ===');
    
    const { slug } = await params;
    console.log('Slug from params:', slug);
    
    const requestBody = await request.json();
    console.log('Request body:', requestBody);
    
    const { title, date, excerpt, content } = requestBody;
    console.log('Extracted fields:', { title, date, excerpt, content });

    console.log('Updating post:', { slug, title, date, excerpt });

    // Create new slug from title if it changed
    const newSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    console.log('Generated new slug:', newSlug);

    // If slug changed, we need to handle it differently
    if (newSlug !== slug) {
      console.log('Slug changed, handling differently');
      // First, get the existing post
      const existingPost = await getPostBySlug(slug);
      if (!existingPost) {
        console.log('Existing post not found');
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }

      // Check if new slug already exists
      const existingPostWithNewSlug = await getPostBySlug(newSlug);
      if (existingPostWithNewSlug && existingPostWithNewSlug.id !== existingPost.id) {
        console.log('New slug already exists');
        return NextResponse.json(
          { error: 'A post with this title already exists' },
          { status: 400 }
        );
      }

      // Update with new slug
      console.log('Updating with new slug');
      const updatedPost = await updatePost(slug, {
        title,
        date,
        excerpt,
        content,
        slug: newSlug
      });

      console.log('Update successful with new slug:', updatedPost);
      return NextResponse.json({
        success: true,
        slug: updatedPost.slug,
        message: 'Post updated successfully',
        slugChanged: true
      });
    } else {
      // Slug didn't change, normal update
      console.log('Slug unchanged, normal update');
      const updatedPost = await updatePost(slug, {
        title,
        date,
        excerpt,
        content
      });

      console.log('Update successful:', updatedPost);
      return NextResponse.json({
        success: true,
        slug: updatedPost.slug,
        message: 'Post updated successfully',
        slugChanged: false
      });
    }
  } catch (error: any) {
    console.error('=== ERROR IN PUT REQUEST ===');
    console.error('Error updating post:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    console.error('=== END ERROR ===');
    
    return NextResponse.json(
      { 
        error: 'Failed to update post', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const success = await deletePost(slug);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete post' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}