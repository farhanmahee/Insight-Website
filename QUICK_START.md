# Quick Reference - Deployment Commands

## 🎯 Fastest Path to Live Deployment (5 minutes)

### 1. Create GitHub Repository
```bash
# Go to: https://github.com/new
# Name: insight-website
# Public
# Do NOT initialize with files
# Create repository
```

### 2. Push Code
```bash
cd "/workspaces/Insight-Website/Insight Website"

git remote add origin https://github.com/YOUR_USERNAME/insight-website.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Netlify
```
1. Visit: https://netlify.com
2. Click: Sign up → GitHub
3. Click: New site from Git
4. Select: insight-website repository
5. Click: Deploy site
```

### 4. Go Live! ✨
```
Your site: https://insight-website.netlify.app
```

---

## 💻 Local Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Git Workflow (Daily)

```bash
# Make changes locally
# ... edit files ...

# Build to verify
npm run build

# Commit changes
git add .
git commit -m "feat: description of changes"

# Push to GitHub
git push origin main

# ✅ Netlify auto-deploys!
```

---

## 🔧 Configuration Files Explained

| File | Purpose | Auto? |
|------|---------|-------|
| `netlify.toml` | Netlify build settings | ✅ Auto-read |
| `package.json` | Dependencies & scripts | ✅ Auto-read |
| `.gitignore` | What to exclude from git | ✅ Auto-applied |
| `.env.local` | Local variables (git ignored) | ❌ Manual on Netlify |
| `vite.config.js` | Build tool settings | ✅ Auto-read |

---

## 🌍 Custom Domain (Later)

```
1. Buy domain: namecheap.com or similar
2. In Netlify: Add domain in settings
3. Update DNS to Netlify nameservers
4. Wait 24-48 hours
5. ✅ Works with your custom domain!
```

---

## ❓ Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check Netlify logs, run `npm run build` locally |
| Old version shows | Hard refresh or clear cache |
| 404 errors | Check `netlify.toml` for SPA routing |
| Env vars undefined | Add to Netlify settings, redeploy |
| Domain not working | Check DNS propagation, wait 48h |

---

## 📊 Project Info

```
Name:           Insight Innovators Website
Type:           React + Vite SPA
Hosting:        Netlify (FREE)
Domain:         .netlify.app subdomain (FREE)
Custom Domain:  Optional, paid
Build Time:     ~1 second
Output Size:    2.57 KB (HTML) + 142 KB (JS)
Performance:    Excellent
Security:       HTTPS, headers, DDoS protection
```

---

## 🚀 You're All Set!

Everything is configured. Just:

1. **Push to GitHub**
2. **Connect to Netlify**
3. **Go live!**

That's it! 🎉

---

**Need Help?**
- 📖 Read: `README.md` (detailed guide)
- 📋 Read: `DEPLOYMENT.md` (step-by-step)
- 🔗 Visit: https://docs.netlify.com
- 💬 Ask: https://community.netlify.com
