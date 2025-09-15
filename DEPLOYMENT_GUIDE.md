# 🚀 Personal Blog Deployment Guide

## 📋 Prerequisites
- GitHub account
- Netlify account (free)

## 🔐 Step 1: GitHub Authentication
Run this command and follow the prompts:
```bash
gh auth login
```
- Choose "GitHub.com"
- Choose "HTTPS" 
- Choose "Login with a web browser"
- Follow the browser authentication

## 📦 Step 2: Create and Push Repository
Run the automated setup script:
```bash
./setup-github.sh
```

**OR** do it manually:
```bash
gh repo create personal-blog --public --description "Personal blog with admin functionality and cinematic theme" --source=. --remote=origin --push
```

## 🌐 Step 3: Deploy to Netlify

### 3.1 Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Sign in with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **"GitHub"** as your Git provider
5. Choose your **"personal-blog"** repository

### 3.2 Configure Build Settings
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** `18` (auto-detected from netlify.toml)

### 3.3 Add Environment Variables
Go to **Site settings** → **Environment variables** and add:

| Variable | Value |
|----------|-------|
| `ADMIN_PASSWORD` | `Erici123!` |
| `NEXT_PUBLIC_ADMIN_AUTH_TOKEN` | `admin-token-12345` |

### 3.4 Deploy
Click **"Deploy site"** and wait for the build to complete.

## ✅ Step 4: Your Blog is Live!

### 🌟 Public Access
Your blog will be available at: `https://your-site-name.netlify.app`

### 🔐 Admin Access
- **Admin URL:** `https://your-site-name.netlify.app/admin/login`
- **Password:** `Erici123!`

## 📝 Features Available
- ✅ **Public blog** with cinematic theme
- ✅ **Admin panel** for managing posts
- ✅ **Create, edit, delete** blog posts
- ✅ **Markdown editor** with live preview
- ✅ **Authentication** system
- ✅ **Responsive design**
- ✅ **SEO optimized**

## 🔧 Customization
- Edit posts in the admin panel
- Modify styling in `src/app/globals.css`
- Add new pages in `src/app/`
- Update content in `src/posts/`

## 🆘 Troubleshooting
- **Build fails:** Check environment variables are set correctly
- **Admin not working:** Verify `ADMIN_PASSWORD` is set
- **Styling issues:** Check `netlify.toml` configuration

## 📞 Support
If you need help, check the build logs in Netlify dashboard or review the configuration files.
