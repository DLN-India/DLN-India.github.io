# Enable GitHub Pages - Quick Guide

## 🚨 Current Status: 404 Error
Your site is returning a 404, which means GitHub Pages needs to be enabled.

## ✅ Step-by-Step: Enable GitHub Pages

### Step 1: Go to Repository Settings
1. Open: **https://github.com/DLN-India/DLN-India.github.io**
2. Click the **"Settings"** tab (top right of the repository)
3. Scroll down in the left sidebar and click **"Pages"**

### Step 2: Configure GitHub Pages
In the Pages settings:

**Source:**
- Select: **Deploy from a branch**
- **Branch:** Choose `master` (or `main` if you switched)
- **Folder:** Select `/ (root)`
- Click **"Save"**

### Step 3: Wait for Deployment
- You'll see a green checkmark when deployment is successful
- The site URL will be displayed (usually takes 1-5 minutes)
- Your site will be at: **https://dln-india.github.io**

## 🔍 Verify Deployment Status

### Check Actions Tab
1. Go to: **https://github.com/DLN-India/DLN-India.github.io/actions**
2. Look for "pages build and deployment" workflow
3. Green checkmark = successful deployment
4. Yellow dot = in progress
5. Red X = error (check the logs)

### Check Environments
1. On your repository main page, look for "Environments" on the right
2. Click "github-pages"
3. Should show "Active" when deployed

## 🌐 Your Site URL
Since your repository is `DLN-India.github.io`, your site will be:
- **https://dln-india.github.io** (GitHub makes it lowercase)

## ⚠️ Troubleshooting

### If still 404 after enabling:
1. **Wait 5-10 minutes** - First deployment takes longer
2. **Check branch name** - Must match exactly (`master` or `main`)
3. **Verify `.nojekyll` file exists** - Already committed ✅
4. **Hard refresh browser** - Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### If you see "Source" dropdown is grayed out:
- The repository must be public, OR
- You need a paid GitHub account for private repos with Pages

## 📋 Checklist
- [ ] Repository settings → Pages is open
- [ ] Source set to "Deploy from a branch"
- [ ] Branch selected: `master`
- [ ] Folder selected: `/ (root)`
- [ ] Clicked "Save"
- [ ] Waiting 1-5 minutes for deployment
- [ ] Checked Actions tab for build status
- [ ] Site accessible at https://dln-india.github.io

---

**After enabling, your site should be live within 1-5 minutes!**

