-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  date VARCHAR(50) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some sample posts
INSERT INTO posts (slug, title, date, excerpt, content) VALUES
('i-love-yebob', 'I love yebob', '2024-12-12', 'So so much', 'So so much'),
('getting-started-with-nextjs', 'Getting Started with Next.js', '2024-12-15', 'Learn the fundamentals of Next.js and how to build modern web applications with React.', 'Learn the fundamentals of Next.js and how to build modern web applications with React. This comprehensive guide covers everything from setup to deployment.'),
('the-importance-of-continuous-learning', 'The Importance of Continuous Learning', '2024-12-20', 'Why continuous learning is essential for personal and professional growth in the tech industry.', 'Why continuous learning is essential for personal and professional growth in the tech industry. In this rapidly evolving field, staying updated with new technologies and best practices is crucial for success.'),
('my-new-blog-post', 'My New Blog Post', '2024-12-25', 'This is a sample blog post to demonstrate the functionality.', 'This is a sample blog post to demonstrate the functionality. You can edit this content through the admin panel.')
ON CONFLICT (slug) DO NOTHING;

-- Create an index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at);
