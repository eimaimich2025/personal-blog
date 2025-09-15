# Personal Blog

A modern, responsive personal blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📝 **Markdown Support** - Write blog posts in Markdown
- 🎨 **Modern Design** - Clean, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 📱 **Mobile Friendly** - Fully responsive design
- 🔍 **SEO Optimized** - Built-in SEO features
- 🚀 **Easy Deployment** - Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding New Blog Posts

1. Create a new Markdown file in the `src/posts/` directory
2. Add frontmatter to your post:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
---

# Your Post Content

Write your blog post content here in Markdown...
```

3. The post will automatically appear on your blog!

## Customization

### Styling
- Edit `src/app/globals.css` for global styles
- Modify components in `src/components/` for specific styling
- Update `tailwind.config.js` for Tailwind customization

### Content
- Update `src/app/layout.tsx` for site metadata
- Modify `src/app/page.tsx` for the homepage
- Edit `src/app/about/page.tsx` and `src/app/contact/page.tsx` for other pages

### Components
- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`
- Post Card: `src/components/PostCard.tsx`
- Post Content: `src/components/PostContent.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically!

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings if needed

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js applications.

## Project Structure

```
personal-blog/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── posts/[slug]/   # Dynamic post pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   └── posts/             # Markdown blog posts
├── public/                # Static assets
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Gray Matter** - Frontmatter parsing
- **Remark** - Markdown processing
- **Date-fns** - Date formatting

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).