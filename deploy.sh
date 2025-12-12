#!/bin/bash

# Insight Innovators Website - Deployment Setup Script
# This script helps you set up your GitHub repository and deploy to Netlify

set -e

echo "🚀 Insight Innovators Website - Deployment Setup"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Not a git repository. Please run this in the project root."
    exit 1
fi

# Get GitHub username
read -p "📝 Enter your GitHub username (e.g., farhanmahee): " GITHUB_USER
read -p "📝 Enter your repository name (e.g., insight-website): " REPO_NAME

echo ""
echo "🔧 Setting up git remote..."

# Set git remote
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "✅ Git remote configured: github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""

# Check git status
echo "📊 Current git status:"
git status --short
echo ""

# Verify build
echo "🏗️  Testing production build..."
npm run build > /dev/null 2>&1
echo "✅ Build successful!"
echo ""

echo "════════════════════════════════════════════════════"
echo "✨ SETUP COMPLETE - NEXT STEPS:"
echo "════════════════════════════════════════════════════"
echo ""
echo "1️⃣  CREATE REPOSITORY ON GITHUB"
echo "   Go to: https://github.com/new"
echo "   Repository name: ${REPO_NAME}"
echo "   DO NOT initialize with README/gitignore (.git already exists)"
echo ""
echo "2️⃣  PUSH YOUR CODE"
echo "   Run these commands:"
echo "   $ git branch -M main"
echo "   $ git push -u origin main"
echo ""
echo "3️⃣  DEPLOY TO NETLIFY"
echo "   a) Go to: https://netlify.com"
echo "   b) Click 'Sign up' → Choose 'GitHub'"
echo "   c) Click 'New site from Git'"
echo "   d) Select your repository: ${GITHUB_USER}/${REPO_NAME}"
echo "   e) Click 'Deploy site'"
echo ""
echo "4️⃣  YOUR SITE GOES LIVE!"
echo "   At: https://${REPO_NAME}.netlify.app"
echo ""
echo "════════════════════════════════════════════════════"
echo ""
echo "💡 Pro Tips:"
echo "   • Every git push → Auto-deploys to Netlify"
echo "   • Use 'npm run dev' for local testing"
echo "   • Check Netlify logs if build fails"
echo "   • Add custom domain later in Netlify dashboard"
echo ""
