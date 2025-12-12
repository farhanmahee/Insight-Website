# Deployment Guide for Insight ERP Website

Your website is built with **Vite + React**. It is fully optimized for production.

## 1. Repository Setup
Your project is ready to be pushed to GitHub/GitLab/Bitbucket.
The `.gitignore` file has been configured to exclude:
- `node_modules/` (Dependencies)
- `dist/` (Build output)
- `.env` (Secrets)

### Steps to Push:
1. Initialize Git (if not done):
   ```bash
   git init
   ```
2. Add files:
   ```bash
   git add .
   ```
3. Commit:
   ```bash
   git commit -m "Initial commit - Insight ERP Website"
   ```
4. Push to your repository:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## 2. Deploying to Netlify (Recommended for ease of use)
Netlify is excellent for Vite projects and offers a generous free tier.

**Option A: Drag & Drop (Manual)**
1. Run `npm run build` locally.
2. This creates a `dist` folder in your project root.
3. Log in to [Netlify Drop](https://app.netlify.com/drop).
4. Drag the `dist` folder onto the page.
5. Your site is live instantly!

**Option B: Connect to Git (Automatic)**
1. Push your code to GitHub.
2. Log in to [Netlify](https://netlify.com).
3. Click "Add new site" -> "Import from existing project".
4. Connect to GitHub and select your repository.
5. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click "Deploy Site".
7. Netlify will now automatically deploy every time you push changes.

## 3. Deploying to Vercel
Vercel is the creators of Next.js and offers heavily optimized hosting.

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and sign up/login.
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel automatically detects Vite. Ensure the settings are:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy".

## 4. Domain Setup
Both Vercel and Netlify allow you to add a custom domain (e.g., `insighterp.com`) for free (you just pay for the domain registration yourself, or use their free subdomains).

- **Netlify**: Site Settings -> Domain Management -> Add custom domain.
- **Vercel**: Settings -> Domains -> Add.

## 5. Mobile Responsiveness
The site has been built using Tailwind CSS with mobile-first classes (`md:`, `lg:`).
- **Navigation**: Collapses into a hamburger menu on small screens.
- **Grid Layouts**: Automatically stack vertically on mobile (1 column) and expand on desktop (3-4 columns).
- **Typography**: Uses fluid sizing (clamp) and responsive font sizes.

Your site is ready for the world!
