# Fix for Blank Page Issue

## The Problem
You selected "main root" branch deployment, which serves raw source files instead of the built website.

## The Solution

### Step 1: Change GitHub Pages Source
1. Go to: https://github.com/stefan9511/norventure_1/settings/pages
2. Under **Source**, change from "Deploy from a branch" to **"GitHub Actions"**
3. Save

### Step 2: Wait for Deployment
- Go to the **Actions** tab in your repository
- You should see "Deploy to GitHub Pages" workflow running
- Wait for it to complete (green checkmark)

### Step 3: Access Your Site
Your site will be at: https://stefan9511.github.io/norventure_1/

## Why This Happens
- **Branch deployment** serves raw files (index.html, src/, etc.) - these don't work without a build
- **GitHub Actions** builds your site first, then deploys the built files from `dist/` folder

## If Actions Tab Shows No Workflow
The workflow should trigger automatically. If not:
1. Make a small change (add a space to README.md)
2. Commit and push
3. This will trigger the workflow

