# Post Update Debug Guide

## Issue Fixed: "Failed to update post. Please try again."

### Root Cause
The error was caused by a bug in the API route `/src/app/api/posts/[slug]/route.ts` where:

1. **Slug Mismatch**: When updating a post title, the code generated a new slug but tried to update using the old slug
2. **Database Conflict**: The update function received conflicting slug information
3. **Poor Error Handling**: Generic error messages didn't help identify the specific issue

### Changes Made

#### 1. Fixed API Route (`/src/app/api/posts/[slug]/route.ts`)
- **Before**: Always passed new slug in update data, causing conflicts
- **After**: Properly handles slug changes by:
  - Checking if slug actually changed
  - Validating new slug doesn't conflict with existing posts
  - Updating with correct slug information
  - Returning proper success/error responses

#### 2. Enhanced Edit Page (`/src/app/admin/posts/[slug]/edit/page.tsx`)
- **Before**: Always redirected to admin page after update
- **After**: Handles slug changes by redirecting to new post URL when slug changes
- **Better Error Messages**: Shows specific error details instead of generic message

#### 3. Improved Global Storage (`/src/lib/posts-global.ts`)
- **Before**: Basic slug update without validation
- **After**: Validates slug uniqueness before updating
- **Better Error Messages**: More descriptive error messages for debugging

### How to Test the Fix

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to admin panel:**
   ```
   http://localhost:3000/admin
   ```

3. **Edit a post:**
   - Click "Edit" on any existing post
   - Change the title (this will generate a new slug)
   - Update other fields
   - Click "Update Post"

4. **Expected Behavior:**
   - ✅ Post updates successfully
   - ✅ URL redirects to new slug if title changed
   - ✅ Clear success/error messages
   - ✅ No more "Failed to update post" errors

### Debugging Tips

If you still encounter issues:

1. **Check Browser Console:**
   - Open Developer Tools (F12)
   - Look for JavaScript errors
   - Check Network tab for API call failures

2. **Check Server Logs:**
   - Look at terminal where `npm run dev` is running
   - Check for error messages and stack traces

3. **Test Different Scenarios:**
   - Update post without changing title
   - Update post with title change
   - Try updating non-existent post
   - Test with duplicate titles

### Environment Configuration

The blog works with **global storage** by default (no database required). If you want to use Supabase:

1. Create `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. Set up Supabase database with `posts` table

3. Restart development server

### Files Modified
- `/src/app/api/posts/[slug]/route.ts` - Fixed slug handling logic
- `/src/app/admin/posts/[slug]/edit/page.tsx` - Enhanced error handling and redirects
- `/src/lib/posts-global.ts` - Improved slug validation

The fix ensures that post updates work reliably whether using global storage or Supabase database.
