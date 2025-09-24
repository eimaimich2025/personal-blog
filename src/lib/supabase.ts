import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create Supabase client if we have real credentials
export const supabase = (supabaseUrl !== 'https://placeholder.supabase.co' && supabaseKey !== 'placeholder-key') 
  ? createClient(supabaseUrl, supabaseKey)
  : null

export interface Post {
  id?: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}
