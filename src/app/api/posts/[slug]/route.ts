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

    return NextResponse.json(post);
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
    const { slug } = await params;
    const { title, date, excerpt, content } = await request.json();

    console.log('Updating post:', { slug, title, date, excerpt });

    // Create new slug from title if it changed
    const newSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // If slug changed, we need to handle it differently
    if (newSlug !== slug) {
      // First, get the existing post
      const existingPost = await getPostBySlug(slug);
      if (!existingPost) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }

      // Check if new slug already exists
      const existingPostWithNewSlug = await getPostBySlug(newSlug);
      if (existingPostWithNewSlug && existingPostWithNewSlug.id !== existingPost.id) {
        return NextResponse.json(
          { error: 'A post with this title already exists' },
          { status: 400 }
        );
      }

      // Update with new slug
      const updatedPost = await updatePost(slug, {
        title,
        date,
        excerpt,
        content,
        slug: newSlug
      });

      return NextResponse.json({
        success: true,
        slug: updatedPost.slug,
        message: 'Post updated successfully',
        slugChanged: true
      });
    } else {
      // Slug didn't change, normal update
      const updatedPost = await updatePost(slug, {
        title,
        date,
        excerpt,
        content
      });

      return NextResponse.json({
        success: true,
        slug: updatedPost.slug,
        message: 'Post updated successfully',
        slugChanged: false
      });
    }
  } catch (error: any) {
    console.error('Error updating post:', error);
    console.error('Error stack:', error.stack);
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