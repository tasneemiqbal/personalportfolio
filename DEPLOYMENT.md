# Quick Start Guide - Deploy to GitHub

Follow these steps to get your portfolio live on GitHub Pages:

## Step 1: Download Your Portfolio

Download the entire `portfolio-website` folder to your computer.

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `portfolio-website` (or anything you like)
4. Make it **Public**
5. **Don't** check "Initialize with README" (we already have one)
6. Click **Create repository**

## Step 3: Upload to GitHub

### Option A: Using GitHub Website (Easiest)

1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL files from the `portfolio-website` folder
3. Scroll down and click **Commit changes**

### Option B: Using Git Command Line

```bash
# Navigate to your portfolio folder
cd portfolio-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: My portfolio website"

# Add GitHub as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes
7. Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio-website`

## Step 5: Share Your Portfolio! 🎉

Add the link to:
- Your resume
- LinkedIn profile
- GitHub profile README
- Job applications

## Troubleshooting

**Site not loading?**
- Wait a few more minutes (can take up to 10 minutes)
- Check that `index.html` is in the root folder
- Make sure GitHub Pages is enabled in Settings

**CSS/JS not loading?**
- Check file paths in `index.html`
- Make sure folder structure is correct

**Need help?**
- Email me: tasneemiqbal417@gmail.com
- Check GitHub Pages docs: [docs.github.com/pages](https://docs.github.com/pages)

---

## Custom Domain (Optional)

Want a custom domain like `tasneemiqbal.com`?

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In GitHub Settings → Pages → Custom domain
3. Enter your domain
4. Update DNS settings with your domain provider
5. Follow GitHub's instructions

---

Good luck! 🚀
