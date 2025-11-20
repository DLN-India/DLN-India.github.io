# Deployment Guide - D.L. Narasimhan Portfolio

This guide will help you deploy your portfolio website to GitHub Pages.

## ✅ Pre-Deployment Checklist

- [x] All files are in place (index.html, css/style.css, js/script.js)
- [x] Images folder structure created (images/awards/, images/team/)
- [x] Content updated with your information
- [x] Email address updated
- [x] Social media links configured
- [x] Navigation menu functional
- [x] Mobile responsive design verified

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Verify Repository Name
Your repository must be named exactly: `dln-india.github.io`

If it's not:
```bash
# Rename your repository on GitHub to dln-india.github.io
# OR clone and rename locally:
git clone https://github.com/dln-india/[current-repo-name].git dln-india.github.io
cd dln-india.github.io
```

### Step 2: Commit and Push Changes
```bash
# Check current status
git status

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website deployment"

# If you haven't set up remote yet:
git remote add origin https://github.com/dln-india/dln-india.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/dln-india/dln-india.github.io`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build and deploy

### Step 4: Access Your Site

Your site will be live at:
**https://dln-india.github.io**

Note: It may take a few minutes for the site to become available after first deployment.

## 📸 Adding Images

### Team Photos
1. Add your team photos to `images/team/` folder
2. Update `index.html` to replace placeholders:
```html
<!-- Replace this -->
<div class="gallery-placeholder">
    <span>Team Photo 1</span>
</div>

<!-- With this -->
<img src="images/team/diwali-2024.jpg" alt="Diwali Celebration 2024">
```

### Awards/Certificates
1. Add certificate images to `images/awards/` folder
2. Update `index.html` to replace placeholders:
```html
<!-- Replace this -->
<div class="award-placeholder">
    <span>🏆</span>
    <p>Certification 1</p>
</div>

<!-- With this -->
<img src="images/awards/certification-name.jpg" alt="Certification Name">
```

## 🔧 Testing Locally

Before deploying, test locally:

### Option 1: Simple HTTP Server (Python)
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: Simple HTTP Server (Node.js)
```bash
# Install globally (one time)
npm install -g http-server

# Run in project directory
http-server

# Then visit: http://localhost:8080
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🌐 Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the root directory:
```
yourdomain.com
www.yourdomain.com
```

2. In GitHub repository settings:
   - Go to Settings → Pages
   - Add your custom domain
   - Follow DNS configuration instructions

3. Update DNS records with your domain provider:
   - Type: `A`
   - Value: `185.199.108.153` (and other GitHub IPs)
   - OR use CNAME pointing to `dln-india.github.io`

## 📝 Updating Content

To update your site:

1. Edit files locally (index.html, css/style.css, etc.)
2. Test locally
3. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
4. Changes will automatically deploy in 1-2 minutes

## 🔍 Troubleshooting

### Site not loading?
- Check repository name is exactly `dln-india.github.io`
- Verify GitHub Pages is enabled in Settings
- Check if build/deployment status shows errors in Actions tab
- Wait 5-10 minutes after first deployment

### Images not showing?
- Verify image paths are correct (case-sensitive)
- Check that images are committed and pushed to GitHub
- Use relative paths: `images/team/photo.jpg` not `/images/team/photo.jpg`

### Styling not working?
- Check browser console for 404 errors on CSS/JS files
- Verify file paths in HTML are correct
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

## 📊 Analytics (Optional)

To add Google Analytics:

1. Add this before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

Replace `UA-XXXXXXXXX-X` with your Google Analytics tracking ID.

## 🎨 Customization

### Colors
Edit `css/style.css` to change color scheme:
```css
:root {
    --navy: #003366;      /* Primary color */
    --orange: #FF6B35;    /* Accent color */
    /* ... */
}
```

### Fonts
Change fonts in `css/style.css`:
```css
body {
    font-family: 'Your Font', -apple-system, BlinkMacSystemFont, ...;
}
```

## ✅ Post-Deployment Verification

- [ ] Site loads at https://dln-india.github.io
- [ ] All sections display correctly
- [ ] Navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] Social media links open correctly
- [ ] Email link works
- [ ] Smooth scrolling animations work
- [ ] Counter animations work

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/) (if using Jekyll features)
- [GitHub Support](https://support.github.com/)

---

**Need Help?** Check the troubleshooting section or review GitHub Pages documentation.

**Ready to Deploy?** Follow Step 1-4 above and your site will be live in minutes!

