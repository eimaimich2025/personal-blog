# 🚀 Supabase Database Setup Guide

## **Step 1: Create Supabase Account**
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (recommended)
4. Create a new project

## **Step 2: Get Your Credentials**
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon public** key
3. You'll need these for the environment variables

## **Step 3: Set Up Database**
1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run** to create the posts table and sample data

## **Step 4: Configure Environment Variables**
Add these to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Admin Authentication (existing)
ADMIN_PASSWORD=Erici123!
NEXT_PUBLIC_ADMIN_AUTH_TOKEN=admin-token-12345
```

## **Step 5: Deploy to Vercel**
1. Add the same environment variables to your Vercel project
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Add both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## **✅ Benefits of This Setup:**
- **Persistent Data:** Your posts are saved permanently
- **No Redeployment:** Changes are instant
- **Scalable:** Can handle thousands of posts
- **Free Tier:** 500MB database, 50,000 monthly requests
- **Real-time:** Can add real-time features later

## **🔧 Database Schema:**
```sql
posts:
- id (auto-increment primary key)
- slug (unique identifier)
- title (post title)
- date (publication date)
- excerpt (short description)
- content (full post content)
- created_at (timestamp)
- updated_at (timestamp)
```

Once set up, your blog will have a real database that persists all changes! 🎉

