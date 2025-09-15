#!/bin/bash

echo "🚀 Setting up GitHub repository for your personal blog..."

# Check if GitHub CLI is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ GitHub CLI not authenticated. Please run: gh auth login"
    echo "   Then run this script again."
    exit 1
fi

echo "✅ GitHub CLI is authenticated"

# Create the repository
echo "📦 Creating GitHub repository..."
gh repo create personal-blog --public --description "Personal blog with admin functionality and cinematic theme" --source=. --remote=origin --push

if [ $? -eq 0 ]; then
    echo "✅ Repository created and pushed successfully!"
    echo "🌐 Your repository is now available at: https://github.com/$(gh api user --jq .login)/personal-blog"
    echo ""
    echo "🎉 Next steps:"
    echo "1. Go to https://netlify.com"
    echo "2. Sign in and click 'Add new site' → 'Import an existing project'"
    echo "3. Connect your GitHub account and select 'personal-blog'"
    echo "4. Configure build settings:"
    echo "   - Build command: npm run build"
    echo "   - Publish directory: .next"
    echo "5. Add environment variables:"
    echo "   - ADMIN_PASSWORD = Erici123!"
    echo "   - NEXT_PUBLIC_ADMIN_AUTH_TOKEN = admin-token-12345"
    echo "6. Click 'Deploy site'"
    echo ""
    echo "🔐 Admin access:"
    echo "   - URL: your-site.netlify.app/admin/login"
    echo "   - Password: Erici123!"
else
    echo "❌ Failed to create repository. Please check your GitHub authentication."
fi
