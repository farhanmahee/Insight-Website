[![Netlify Status](https://api.netlify.com/api/v1/badges/fd77b941-18ea-4c8a-a9f1-b857e8da9088/deploy-status)](https://app.netlify.com/projects/insightinnovators/deploys)

# Insight Innovators Website

Enterprise Automation, SaaS & ERP Systems - Professional Business Solutions

## 🚀 Project Overview

This is a modern, responsive website for Insight Innovators Limited, built with:
- **Vite** - Next-generation frontend build tool
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Backend services
- **Google Generative AI** - AI integration

## 📁 Project Structure

```
.
├── src/                    # Source code
│   └── main.jsx           # Entry point
├── dist/                  # Built files (production)
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── netlify.toml           # Netlify deployment config
└── .env.local             # Environment variables (local)
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts dev server at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Generates optimized production build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Test production build locally

## 🌐 Free Deployment with Netlify

### Step 1: Push to GitHub
First, ensure your local repository is set up:

```bash
cd /workspaces/Insight-Website/Insight\ Website
git remote add origin https://github.com/farhanmahee/insight-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify (Auto)
1. Go to **[netlify.com](https://netlify.com)**
2. Click **"Sign up"** and choose **"GitHub"**
3. Authorize Netlify to access your GitHub account
4. Click **"New site from Git"**
5. Select your GitHub repository (`insight-website`)
6. Netlify automatically reads `netlify.toml` - no config needed!
7. Click **"Deploy site"**

**✅ Your website goes live instantly at:** `your-repo.netlify.app`

### Step 3: Connect Custom Domain (Later)
When you buy a domain, add it in:
1. Netlify Dashboard → Site settings → Domain management
2. Add your custom domain
3. Point your domain registrar to Netlify's DNS servers

## 🔧 Configuration Files

### `netlify.toml` - Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = "dist"
```
- ✅ Automatically runs `npm run build`
- ✅ Deploys contents of `dist/` folder
- ✅ Includes SPA routing, security headers, caching

### `package.json` - Node Configuration
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### `.env.local` - Environment Variables
```
GEMINI_API_KEY=your_api_key
VITE_FIREBASE_CONFIG=your_config
```
**On Netlify:** Add via Site settings → Build & deploy → Environment

## 📊 Performance & Optimization

- ✅ Vite for instant builds and optimized bundling
- ✅ Automatic code splitting
- ✅ Gzip compression enabled
- ✅ Long-term caching for assets
- ✅ CDN distribution via Netlify's global network
- ✅ Lighthouse-optimized

### Build Output
```
dist/index.html              2.57 kB (gzip: 0.84 kB)
dist/assets/index-*.js      142.30 kB (gzip: 45.65 kB)
```

## 🔐 Security Features

- ✅ Content-Type nosniff protection
- ✅ XSS Protection enabled
- ✅ Frame-Options SAMEORIGIN (prevents clickjacking)
- ✅ Referrer-Policy strict
- ✅ HTTPS/SSL auto-enabled on netlify.app
- ✅ Environment variables kept secure

## 📈 Going Live - Checklist

- [x] Code ready for production
- [x] Build configuration complete
- [x] Netlify config file added
- [x] Git repository created
- [ ] Push code to GitHub
- [ ] Connect Netlify to GitHub
- [ ] Verify site at `yoursite.netlify.app`
- [ ] (Optional) Purchase & connect custom domain
- [ ] (Optional) Set up email notifications

## 🌍 Domain Options

### When You're Ready to Purchase

**Best Domain Registrars:**
1. **Namecheap** - Low cost, great support
2. **Google Domains** - Simple integration
3. **GoDaddy** - Wide selection
4. **Porkbun** - Competitive pricing

**Estimated Cost:** $10-20/year for most domains

### After Purchasing Domain
1. Login to domain registrar
2. Go to DNS settings
3. Add Netlify nameservers:
   - ns1.netlify.com
   - ns2.netlify.com
   - ns3.netlify.com

Alternatively, use CNAME record pointing to `your-netlify-site.netlify.app`

## 🚀 Continuous Deployment

Every time you push to GitHub:
```bash
git add .
git commit -m "Update website"
git push origin main
```

✅ Netlify automatically rebuilds and deploys your site!

## 🤝 Development Workflow

```bash
# Make changes locally
npm run dev

# Test in browser at http://localhost:5173
# Make edits - changes auto-reload

# When ready to deploy
npm run build
git add .
git commit -m "Update description"
git push origin main

# ✅ Auto-deployed to Netlify!
```

## 📞 Support Resources

| Issue | Resource |
|-------|----------|
| Netlify Deployment | [netlify.com/docs](https://docs.netlify.com) |
| Vite Issues | [vitejs.dev/guide](https://vitejs.dev/guide/) |
| React Help | [react.dev](https://react.dev) |
| Tailwind CSS | [tailwindcss.com/docs](https://tailwindcss.com/docs) |

## 📜 License

MIT License - Open source and free to use

---

**Status:** ✅ **Production Ready**  
**Hosting:** Free on Netlify  
**Domain:** Free .netlify.app subdomain  
**Last Updated:** December 11, 2025

---

## Quick Links

- 📱 View Live: `https://your-site.netlify.app` (after deployment)
- 💻 Repository: `https://github.com/farhanmahee/insight-website`
- 🔨 Local Dev: `npm run dev`
- 🌐 Netlify Dashboard: `https://app.netlify.com`
