import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return NextResponse.json({
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
    });
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

    // Create new slug from title if it changed
    const newSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Create frontmatter
    const frontmatter = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
---

${content}`;

    // Write file
    const filePath = path.join(postsDirectory, `${slug}.md`);
    fs.writeFileSync(filePath, frontmatter);

    // If slug changed, rename the file
    if (newSlug !== slug) {
      const newFilePath = path.join(postsDirectory, `${newSlug}.md`);
      fs.renameSync(filePath, newFilePath);
    }

    return NextResponse.json({ 
      success: true, 
      slug: newSlug,
      message: 'Post updated successfully' 
    });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
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
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

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
