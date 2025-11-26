# Troubleshooting Blank Page Issue

## The Problem
You're seeing 404 errors for `main.tsx` and `vite.svg`, which means GitHub Pages is serving the **source files** instead of the **built files**.

## Root Cause
GitHub Pages is configured to serve from the **branch** instead of **GitHub Actions**.

## Solution

### Step 1: Change GitHub Pages Source
1. Go to: https://github.com/stefan9511/norventure_1/settings/pages
2. Under **"Source"**, you'll see it's set to **"Deploy from a branch"**
3. **Change it to "GitHub Actions"**
4. Click **Save**

### Step 2: Verify GitHub Actions Ran
1. Go to: https://github.com/stefan9511/norventure_1/actions
2. Look for "Deploy to GitHub Pages" workflow
3. It should show a green checkmark ✅ if successful
4. If it shows ❌ (failed), click on it to see the error

### Step 3: Manually Trigger Deployment (if needed)
If the workflow didn't run:
1. Go to Actions tab
2. Click "Deploy to GitHub Pages" on the left
3. Click "Run workflow" button (top right)
4. Select "main" branch
5. Click "Run workflow"
6. Wait for it to complete

### Step 4: Clear Browser Cache
After deployment:
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Or open in incognito/private window

## How to Verify It's Working

After changing to GitHub Actions:
- The built `dist/index.html` references `/norventure_1/assets/index-*.js` (not `/src/main.tsx`)
- The page should load with all styles and content
- No 404 errors in browser console

## If Still Not Working

Check the browser console (F12) for:
- 404 errors → Assets not found (base path issue)
- CORS errors → GitHub Pages config issue
- JavaScript errors → Code issue

The key is: **GitHub Pages MUST use "GitHub Actions" as the source**, not "Deploy from a branch".

