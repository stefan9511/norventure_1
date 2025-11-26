# Deploying to GitHub Pages

This guide will help you deploy your Norventure website to GitHub Pages for free.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your code ready to push

## Step-by-Step Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it `norventure` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Configure the Base Path

**Important:** If your repository name is `norventure`, the base path is already set correctly in `vite.config.ts`.

If your repository has a different name, update `vite.config.ts`:
```typescript
base: '/your-repo-name/', // Change this to match your repo name
```

**OR** if you're using a custom domain or `username.github.io` repository:
```typescript
base: '/', // Use this for custom domains or username.github.io repos
```

### 3. Initialize Git and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Norventure website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/norventure.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: "GitHub Actions"
5. Save the settings

### 5. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your site when you push to `main` branch
- Deploy it to GitHub Pages

**First deployment:**
- After pushing, go to the **Actions** tab in your repository
- You should see a workflow running
- Wait for it to complete (usually 2-3 minutes)

### 6. Access Your Website

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/norventure/
```

**Note:** It may take a few minutes for the site to be accessible after the first deployment.

## Updating Your Site

To update your site:
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy

## Troubleshooting

### Site shows 404
- Wait 5-10 minutes after deployment
- Check the Actions tab to ensure deployment succeeded
- Verify the base path in `vite.config.ts` matches your repo name

### Assets not loading
- Make sure `base` in `vite.config.ts` includes the trailing slash: `/norventure/`
- Clear your browser cache

### Build fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally to test

## Custom Domain (Optional)

To use a custom domain:
1. Update `vite.config.ts` base to `/`
2. Add a `CNAME` file in the `public` folder with your domain
3. Configure DNS settings in your domain provider

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

