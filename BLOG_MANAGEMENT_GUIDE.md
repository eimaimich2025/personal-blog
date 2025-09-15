# Blog Management Guide

## Overview
Your blog now has a complete content management system that allows you to create, edit, and manage blog posts directly from the web interface.

## How to Access the Admin Panel

### In Development Mode
1. Visit your site at `http://localhost:3000`
2. Look for the "Admin" link in the navigation bar (yellow text)
3. Click on "Admin" to access the dashboard

### In Production
The admin panel is automatically hidden in production for security. You can access it by:
1. Going to `/admin` directly in your browser
2. The system will show a 404 page in production

## Creating a New Post

1. **Access the Admin Panel** (see above)
2. **Click "Create New Post"** button
3. **Fill out the form:**
   - **Title**: The main title of your post
   - **Date**: Publication date (defaults to today)
   - **Excerpt**: Brief description that appears in post previews
   - **Content**: Write your post in Markdown format

4. **Use the Markdown Editor:**
   - **Write Tab**: Write your content in Markdown
   - **Preview Tab**: See how your post will look when published
   - **Character/Line Count**: Track your content length
   - **Markdown Help**: Click "Markdown Help" for formatting tips

5. **Click "Create Post"** to save

## Editing an Existing Post

1. **Go to the Admin Dashboard**
2. **Find your post** in the table
3. **Click "Edit"** next to the post you want to modify
4. **Make your changes** using the same interface as creating
5. **Click "Update Post"** to save changes

## Markdown Formatting Guide

### Headers
```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection (H3)
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Inline code`
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Link text](https://example.com)
```

### Code Blocks
```markdown
```
Your code here
```
```

## Managing Posts

### Viewing Posts
- **Admin Dashboard**: See all posts in a table format
- **Public View**: Click "View" to see how the post appears to readers

### Deleting Posts
1. Go to the Admin Dashboard
2. Find the post you want to delete
3. Click "Delete" next to the post
4. Confirm the deletion

## File Structure

Your blog posts are stored as Markdown files in:
```
src/posts/
├── post-slug-1.md
├── post-slug-2.md
└── ...
```

Each file contains:
- **Frontmatter**: Title, date, and excerpt
- **Content**: The main post content in Markdown

## Tips for Writing Great Posts

1. **Use Descriptive Titles**: Make them clear and engaging
2. **Write Good Excerpts**: These appear in post previews and social media
3. **Structure Your Content**: Use headers to organize your thoughts
4. **Preview Before Publishing**: Always check the preview tab
5. **Keep It Consistent**: Use the same formatting style throughout

## Troubleshooting

### If You Can't Access Admin
- Make sure you're in development mode (`npm run dev`)
- Check that you're going to the correct URL (`/admin`)

### If Posts Don't Appear
- Check that the post has a valid date
- Ensure the title and content are not empty
- Look for any error messages in the browser console

### If Markdown Isn't Rendering
- Check your Markdown syntax
- Use the preview tab to see if formatting is correct
- Refer to the Markdown Help section in the editor

## Security Notes

- The admin panel is only accessible in development mode
- In production, the admin routes return 404 errors
- All post data is stored locally in your project files
- No external database is required

## Next Steps

1. **Create Your First Post**: Try writing a simple post to get familiar with the system
2. **Experiment with Markdown**: Use the preview feature to see different formatting options
3. **Organize Your Content**: Use consistent naming and structure for your posts
4. **Regular Publishing**: Set up a schedule for creating new content

Happy blogging! 🚀
