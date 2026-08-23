# GitHub Pages Hosting Guide - Haven Printing Company

## 🎯 What is GitHub Pages?

GitHub Pages is a **FREE** web hosting service that lets you host static websites directly from a GitHub repository.

**Benefits:**
- ✅ 100% Free forever
- ✅ Fast and reliable
- ✅ Easy to update
- ✅ Can use custom domain later
- ✅ Automatic HTTPS/SSL
- ✅ Great for testing before buying hosting

**Your site will be live at:**
`https://yourusername.github.io/haven-printing`

Later, you can point `havenprinting.com` to it!

---

## 📋 Prerequisites

Before starting, you need:
1. **GitHub Account** (free) - Create at https://github.com
2. **Git installed** on your computer (free) - Download from https://git-scm.com
3. Your website files (you already have these!)

---

## STEP 1: Create GitHub Account

### If You Don't Have GitHub Account:

1. **Go to:** https://github.com
2. **Click:** "Sign up" (top right)
3. **Enter:**
   - Email: Your email address
   - Password: Create strong password
   - Username: Choose username (e.g., `havenprinting`)
4. **Verify:** Complete email verification
5. **Choose:** Free plan
6. **Done!** Your GitHub account is ready

**Save your login details!**

---

## STEP 2: Install Git on Your Computer

### Check if Git is Already Installed:

1. Open Command Prompt (Windows) or Terminal (Mac)
2. Type: `git --version`
3. If you see version number (e.g., "git version 2.40.0"), Git is installed! Skip to Step 3.
4. If you get an error, follow installation below.

### Install Git (Windows):

1. **Download:** https://git-scm.com/download/win
2. **Run installer:** Accept all default settings
3. **Click:** "Next" through all screens
4. **Finish** installation
5. **Restart** Command Prompt
6. **Test:** Type `git --version` to verify

### Install Git (Mac):

1. **Download:** https://git-scm.com/download/mac
2. **Install:** Follow installer instructions
3. **Or use Homebrew:** `brew install git`
4. **Test:** Type `git --version` in Terminal

---

## STEP 3: Prepare Your Website Files

### Files to Include:

Make sure your folder has:
- ✅ All .html files (9 files)
- ✅ css/ folder with style.css
- ✅ js/ folder with .js files
- ✅ All image files (.jpg)
- ✅ sitemap.xml
- ✅ robots.txt

### Files to EXCLUDE (Don't upload):

Create or update `.gitignore` file to exclude:
- ❌ node_modules/ folder (if present)
- ❌ .vscode/ folder
- ❌ Documentation files (.md files) - optional
- ❌ Package files (package.json, package-lock.json)

**Note:** The .gitignore file already exists in your folder!

---

## STEP 4: Initialize Git Repository

### Open Command Prompt in Your Project Folder:

**Option A: Using File Explorer**
1. Open folder: `C:\Users\USER\OneDrive\Desktop\Haven Printing Company`
2. Click in address bar
3. Type: `cmd` and press Enter
4. Command Prompt opens in that folder

**Option B: Using Command Prompt**
1. Open Command Prompt
2. Type: `cd "C:\Users\USER\OneDrive\Desktop\Haven Printing Company"`
3. Press Enter

### Initialize Git:

Run these commands one by one:

```bash
# Initialize git repository
git init

# Configure your identity (use your info)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Haven Printing Company website"
```

**Expected output:**
```
Initialized empty Git repository...
[master (root-commit) abc1234] Initial commit - Haven Printing Company website
 XX files changed, XXXX insertions(+)
```

---

## STEP 5: Create GitHub Repository

### On GitHub Website:

1. **Go to:** https://github.com
2. **Log in** with your account
3. **Click:** "+" icon (top right)
4. **Select:** "New repository"

### Repository Settings:

5. **Repository name:** `haven-printing` (lowercase, no spaces)
6. **Description:** "Haven Printing Company INC - Official Website"
7. **Visibility:** Public (required for free GitHub Pages)
8. **DO NOT** initialize with README, .gitignore, or license
9. **Click:** "Create repository"

### Copy Repository URL:

You'll see a page with URLs. Copy the HTTPS URL:
```
https://github.com/yourusername/haven-printing.git
```

---

## STEP 6: Push Your Website to GitHub

### In Command Prompt (in your project folder):

Run these commands (replace with YOUR repository URL):

```bash
# Add GitHub as remote repository
git remote add origin https://github.com/yourusername/haven-printing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If asked for credentials:**
- Username: Your GitHub username
- Password: Your GitHub password (or personal access token)

**Expected output:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XXX KiB | XXX MiB/s, done.
Total XX (delta 0), reused 0 (delta 0)
To https://github.com/yourusername/haven-printing.git
 * [new branch]      main -> main
```

### Verify Upload:

1. **Go to:** https://github.com/yourusername/haven-printing
2. **Check:** All your files are listed
3. **Success!** Your website is on GitHub

---

## STEP 7: Enable GitHub Pages

### On GitHub Repository Page:

1. **Go to:** Your repository (https://github.com/yourusername/haven-printing)
2. **Click:** "Settings" (top menu)
3. **Click:** "Pages" (left sidebar)
4. **Under "Source":**
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. **Click:** "Save"

### Wait for Deployment:

- GitHub will build and deploy your site (1-5 minutes)
- Refresh the page after 1 minute
- You'll see: "Your site is live at https://yourusername.github.io/haven-printing"

### Visit Your Live Website:

1. **Click:** The link GitHub provides
2. **Your website is LIVE!** 🎉
3. **Share this URL** with anyone!

---

## STEP 8: Update sitemap.xml (Important!)

### Edit sitemap.xml:

Replace all instances of `https://havenprinting.com` with your GitHub Pages URL:
`https://yourusername.github.io/haven-printing`

**Example:**
```xml
<url>
  <loc>https://yourusername.github.io/haven-printing/</loc>
  <lastmod>2026-08-24</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

### Update robots.txt:

Change sitemap location:
```
Sitemap: https://yourusername.github.io/haven-printing/sitemap.xml
```

### Push Updates:

```bash
git add sitemap.xml robots.txt
git commit -m "Update URLs for GitHub Pages"
git push
```

Wait 1-2 minutes for changes to go live.

---

## 🎉 YOUR WEBSITE IS LIVE!

### Test Everything:

Visit: `https://yourusername.github.io/haven-printing`

Check:
- [ ] Homepage loads
- [ ] All pages accessible
- [ ] Images display correctly
- [ ] Navigation works
- [ ] Forms work
- [ ] Mobile responsive
- [ ] WhatsApp button works
- [ ] All links work

---

## 📝 How to Update Your Website

### Whenever You Make Changes:

1. **Edit files** on your computer
2. **Open Command Prompt** in project folder
3. **Run these commands:**

```bash
# See what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push
```

4. **Wait 1-2 minutes** for changes to go live
5. **Refresh your browser** to see updates

### Common Updates:

**Add new image:**
```bash
git add new-image.jpg
git commit -m "Add new product image"
git push
```

**Update text:**
```bash
git add about.html
git commit -m "Update company information"
git push
```

**Update multiple files:**
```bash
git add .
git commit -m "Update portfolio and gallery"
git push
```

---

## 🌐 Add Custom Domain Later (Optional)

### When You Buy havenprinting.com:

1. **In GitHub Settings > Pages:**
   - Enter custom domain: `havenprinting.com`
   - Click "Save"

2. **At Domain Registrar (Namecheap/GoDaddy):**
   - Add DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

3. **Wait 24-48 hours** for DNS propagation
4. **Enable HTTPS** in GitHub Settings > Pages
5. **Done!** Your site now works at havenprinting.com

---

## 🔧 Troubleshooting

### Problem: "git: command not found"
**Solution:** Git not installed. Go back to Step 2.

### Problem: "remote: Repository not found"
**Solution:** Check repository URL is correct. Use HTTPS URL from GitHub.

### Problem: Images not showing on live site
**Solution:** 
- Check image file names match exactly (case-sensitive)
- Verify images uploaded to GitHub
- Check browser console (F12) for errors

### Problem: Forms not working
**Solution:** 
- GitHub Pages doesn't support server-side code
- Use FormSubmit.co or Formspree.io (see DEPLOYMENT-GUIDE.md)
- Update form action to FormSubmit URL

### Problem: Changes not showing
**Solution:**
- Wait 1-2 minutes after pushing
- Clear browser cache (Ctrl + Shift + Delete)
- Try incognito/private mode
- Hard refresh (Ctrl + F5)

### Problem: 404 Page Not Found
**Solution:**
- Check file names are lowercase
- Ensure index.html exists
- Verify GitHub Pages is enabled in Settings

---

## 💡 GitHub Pages Tips

### Advantages:
✅ Free forever
✅ Fast and reliable
✅ Automatic HTTPS
✅ Easy updates with Git
✅ Version control (see history of changes)
✅ Can use custom domain

### Limitations:
❌ No server-side code (PHP, Python, etc.)
❌ No database support
❌ 1GB repository size limit
❌ 100GB bandwidth per month (plenty for small sites)
❌ Public repository required for free (code is visible)

### Best Practices:
- Commit changes often with clear messages
- Test locally before pushing
- Don't upload sensitive information
- Keep repository organized
- Use .gitignore to exclude unnecessary files

---

## 📊 What Happens Next?

### Immediately:
- Your website is live and accessible worldwide
- Anyone can visit yourusername.github.io/haven-printing
- You can share the link on social media
- You can test everything thoroughly

### Short-term (1-2 weeks):
- Use this URL to show clients
- Get feedback on design and content
- Test forms and features
- Make improvements based on feedback
- Add more photos as you complete projects

### Long-term (1-3 months):
- Purchase custom domain (havenprinting.com)
- Point domain to GitHub Pages (free!)
- Or migrate to paid hosting if needed
- Either way, you have a live site NOW!

---

## 🎯 Quick Command Reference

### First-Time Setup:
```bash
git init
git config user.name "Your Name"
git config user.email "your@email.com"
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

### Update Website:
```bash
git add .
git commit -m "Update description"
git push
```

### Check Status:
```bash
git status                 # See what changed
git log                    # See commit history
git remote -v              # See GitHub URL
```

### Undo Changes (Before Commit):
```bash
git checkout -- filename   # Undo changes to file
git reset                  # Unstage all files
```

---

## 📞 Need Help?

### GitHub Help:
- GitHub Docs: https://docs.github.com/pages
- GitHub Community: https://github.community
- GitHub Support: support@github.com

### Git Help:
- Git Documentation: https://git-scm.com/doc
- Git Tutorial: https://www.atlassian.com/git/tutorials
- YouTube: "Git and GitHub for Beginners"

### Common Issues:
- Can't push: Check internet connection, verify credentials
- 404 error: Wait 5 minutes after enabling Pages
- Images broken: Check file paths and names
- Forms not working: Use FormSubmit or Formspree

---

## ✅ Success Checklist

After completing all steps:

- [ ] GitHub account created
- [ ] Git installed and working
- [ ] Repository created on GitHub
- [ ] Website files pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Website accessible at GitHub URL
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Shared URL with someone to test

---

## 🎊 Congratulations!

Your website is now **LIVE on the internet** for FREE!

**Your live URL:**
`https://yourusername.github.io/haven-printing`

**What this means:**
- ✅ Anyone in the world can visit your site
- ✅ Share on Facebook, WhatsApp, everywhere
- ✅ Show potential clients
- ✅ Test everything thoroughly
- ✅ Get feedback before buying domain
- ✅ Start building your online presence NOW

**Next Steps:**
1. Share your URL everywhere
2. Test on multiple devices
3. Ask for feedback
4. Make improvements
5. When ready, buy custom domain (havenprinting.com)
6. Point domain to GitHub Pages (free!)
7. Or migrate to paid hosting

---

**Questions?**
- GitHub Issues: Create issue in your repository
- Community Help: stackoverflow.com (tag: github-pages)
- YouTube: Search "GitHub Pages tutorial"

---

*Haven Printing Company INC*  
*"Name One Thing We Can't Print"*

**Website Status:** ✅ LIVE ON GITHUB PAGES  
**Your URL:** https://yourusername.github.io/haven-printing  
**Cost:** $0 (FREE!)  
**Time to Live:** 10-20 minutes  

**LET'S GET IT ONLINE!** 🚀
