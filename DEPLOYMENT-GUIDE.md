# Website Deployment Guide - Haven Printing Company

## 🎯 Overview

This guide walks you through deploying your website from your local computer to a live web server so people can access it at **havenprinting.com**.

---

## 📋 Pre-Deployment Checklist

### ✅ Before You Start:
- [ ] All HTML files are tested and working locally
- [ ] All images display correctly
- [ ] Contact forms work (email submissions)
- [ ] Phone numbers are correct (+231 779 385 933)
- [ ] Email is correct (info@havenprinting.com)
- [ ] TIN is correct (500761801)
- [ ] Company information is accurate
- [ ] No broken links between pages
- [ ] Website tested on phone and computer

---

## STEP 1: Register Domain Name

### What is a Domain?
Your website address (e.g., havenprinting.com)

### Recommended Domain Registrars:
1. **Namecheap** - https://www.namecheap.com (~$10/year)
2. **GoDaddy** - https://www.godaddy.com (~$12/year)
3. **Google Domains** - https://domains.google (~$12/year)

### Domain Options:
- **First Choice:** havenprinting.com
- **Alternatives:** 
  - havenprintingliberia.com
  - havenprintingco.com
  - havenprintingcompany.com

### How to Register:
1. Go to domain registrar website
2. Search for "havenprinting.com"
3. If available, add to cart
4. Choose 1-3 years registration
5. Add domain privacy protection ($2-5/year) - RECOMMENDED
6. Complete purchase
7. Save login credentials safely!

**Cost:** $10-15/year

---

## STEP 2: Choose Web Hosting

### What is Web Hosting?
Storage space on a server where your website files live.

### Recommended Hosting Providers:

#### Budget Option ($3-6/month):
1. **Hostinger** - https://www.hostinger.com
   - Price: ~$3-4/month
   - Features: SSL, email, 99.9% uptime
   - Best for: Small businesses

2. **Namecheap Hosting** - https://www.namecheap.com
   - Price: ~$4-5/month
   - Features: cPanel, SSL, email
   - Best for: Easy management

#### Better Performance ($10-20/month):
3. **SiteGround** - https://www.siteground.com
   - Price: ~$10-15/month
   - Features: Fast servers, great support
   - Best for: Professional sites

4. **Cloudways** - https://www.cloudways.com
   - Price: ~$12-20/month
   - Features: Cloud hosting, very fast
   - Best for: Growing businesses

### What to Look For:
- ✅ SSL certificate included (for https://)
- ✅ Email accounts (info@havenprinting.com)
- ✅ 99.9%+ uptime guarantee
- ✅ Daily backups
- ✅ cPanel or easy file manager
- ✅ 24/7 support
- ✅ Fast servers (Africa-friendly)

### How to Purchase:
1. Choose hosting provider
2. Select shared hosting plan (cheapest is fine)
3. Enter your domain name (havenprinting.com)
4. Choose 12-month plan (usually cheapest per month)
5. Add SSL certificate (should be free)
6. Add email accounts (usually free)
7. Complete purchase
8. Save login credentials!

**Cost:** $5-20/month ($60-240/year)

---

## STEP 3: Connect Domain to Hosting

### If Domain and Hosting from Same Company:
- Usually automatic!
- Check hosting control panel
- Domain should show as connected

### If Domain and Hosting from Different Companies:

#### At Domain Registrar (Namecheap, GoDaddy):
1. Log into domain registrar account
2. Find "Domain List" or "My Domains"
3. Click "Manage" on havenprinting.com
4. Find "Nameservers" section
5. Select "Custom DNS" or "Custom Nameservers"
6. Enter nameservers from hosting company:
   - ns1.yourhost.com
   - ns2.yourhost.com
   (Your hosting will provide these)
7. Save changes
8. Wait 24-48 hours for DNS propagation

---

## STEP 4: Upload Website Files

### Using cPanel File Manager (Easiest):

1. **Log into cPanel:**
   - Go to: yourhost.com/cpanel
   - Enter username and password from hosting

2. **Open File Manager:**
   - Find "Files" section
   - Click "File Manager"

3. **Navigate to public_html:**
   - This is your website root folder
   - Everything here is public

4. **Upload Files:**
   - Click "Upload" button at top
   - Select all your files:
     - All .html files (9 files)
     - css folder (entire folder)
     - js folder (entire folder)
     - All image files (.jpg files)
     - sitemap.xml
     - robots.txt
     - .htaccess
   
5. **Wait for Upload:**
   - Large images take longer
   - Don't close browser during upload

6. **Verify Structure:**
   Your public_html should look like:
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── services.html
   ├── (other .html files)
   ├── css/
   │   └── style.css
   ├── js/
   │   ├── main.js
   │   └── gallery.js
   ├── images/ (all .jpg files)
   ├── sitemap.xml
   ├── robots.txt
   └── .htaccess
   ```

### Using FTP (FileZilla):

1. **Download FileZilla:**
   - Go to: https://filezilla-project.org
   - Download FileZilla Client (free)
   - Install on your computer

2. **Get FTP Credentials:**
   - From hosting cPanel
   - Look for "FTP Accounts"
   - Note: hostname, username, password, port

3. **Connect:**
   - Open FileZilla
   - Enter FTP hostname (e.g., ftp.havenprinting.com)
   - Enter username
   - Enter password
   - Port: 21 (or as provided)
   - Click "Quickconnect"

4. **Upload Files:**
   - Left side = Your computer
   - Right side = Web server
   - Navigate right side to public_html
   - Drag all files from left to right
   - Wait for upload to complete

---

## STEP 5: Install SSL Certificate (HTTPS)

### Why SSL?
- Encrypts data between visitor and website
- Shows green padlock in browser
- Required for trust and SEO
- Google ranks HTTPS sites higher

### How to Install:

#### If Using cPanel:
1. Log into cPanel
2. Find "Security" section
3. Click "SSL/TLS Status"
4. Find havenprinting.com
5. Click "Run AutoSSL"
6. Wait 2-5 minutes
7. Certificate installed!

#### If Using Let's Encrypt (Free):
1. In cPanel, find "SSL/TLS"
2. Click "Let's Encrypt SSL"
3. Select your domain
4. Click "Issue"
5. Done!

#### Verify SSL Works:
1. Visit: https://havenprinting.com (note the "s")
2. Should see green padlock
3. No security warnings

### Force HTTPS:
Uncomment these lines in .htaccess:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## STEP 6: Set Up Email Accounts

### Create Email: info@havenprinting.com

#### In cPanel:
1. Find "Email" section
2. Click "Email Accounts"
3. Click "Create"
4. Email: info
5. Domain: havenprinting.com
6. Password: (create strong password)
7. Mailbox quota: 500 MB (or unlimited)
8. Click "Create"

### Access Email:

#### Option 1: Webmail (Browser):
- Go to: havenprinting.com/webmail
- Login with: info@havenprinting.com
- Enter password
- Choose: Roundcube or Horde

#### Option 2: Email Client (Outlook, Gmail):
Get these settings from cPanel:
- Incoming: mail.havenprinting.com (POP3/IMAP)
- Outgoing: mail.havenprinting.com (SMTP)
- Port: 993 (IMAP), 465 (SMTP)
- SSL: Yes
- Username: info@havenprinting.com
- Password: (your password)

---

## STEP 7: Test Everything

### Complete Testing Checklist:

#### Homepage (index.html):
- [ ] Loads correctly at havenprinting.com
- [ ] Logo displays
- [ ] All images show
- [ ] Navigation menu works
- [ ] All links work
- [ ] WhatsApp button opens WhatsApp
- [ ] Phone number is clickable
- [ ] Scrolling is smooth

#### All Pages:
- [ ] about.html loads
- [ ] services.html loads
- [ ] security-printing.html loads
- [ ] portfolio.html loads and filters work
- [ ] gallery.html loads and lightbox works
- [ ] faq.html loads and accordions work
- [ ] booking.html form works
- [ ] contact.html form works

#### Mobile Testing:
- [ ] Open on phone browser
- [ ] Hamburger menu works
- [ ] All images display
- [ ] Touch scrolling works
- [ ] Forms are usable
- [ ] Phone numbers click to call
- [ ] WhatsApp opens correctly

#### Forms Testing:
- [ ] Fill out booking form
- [ ] Submit and check email received
- [ ] Fill out contact form
- [ ] Submit and check email received
- [ ] Test spam protection (if added)

#### Links Testing:
- [ ] All internal links work (between pages)
- [ ] Facebook link works
- [ ] WhatsApp link works
- [ ] Phone link works
- [ ] Email link works
- [ ] Google Maps loads

#### SSL/Security:
- [ ] https://havenprinting.com loads (note the "s")
- [ ] Green padlock shows in browser
- [ ] No mixed content warnings
- [ ] All images load via HTTPS

---

## STEP 8: Configure Forms (Important!)

Your forms currently use `mailto:` which is basic. Consider upgrading:

### Option 1: FormSubmit (Free & Easy):
1. Go to: https://formsubmit.co
2. Change form action to:
   ```html
   <form action="https://formsubmit.co/info@havenprinting.com" method="POST">
   ```
3. Add hidden input:
   ```html
   <input type="hidden" name="_captcha" value="false">
   <input type="hidden" name="_subject" value="New booking from website">
   ```
4. First submission: Check email and confirm
5. Done! Forms now work without mailto

### Option 2: Formspree (Better):
1. Sign up: https://formspree.io
2. Create new form
3. Get form endpoint
4. Update form action to endpoint
5. Add reCAPTCHA protection
6. Track submissions in dashboard

### Option 3: Custom Backend (Advanced):
- Requires PHP knowledge
- Create contact.php file
- Process form data
- Send via PHP mail()
- More control and features

---

## STEP 9: Post-Launch Setup

### Immediate (Day 1):
- [ ] **Google Search Console**
  - Go to: search.google.com/search-console
  - Add property: havenprinting.com
  - Verify ownership (multiple methods)
  - Submit sitemap: havenprinting.com/sitemap.xml

- [ ] **Google Analytics**
  - Go to: analytics.google.com
  - Create account
  - Add website
  - Get tracking code
  - Add to all pages (before </head>)

- [ ] **Google Business Profile**
  - Go to: business.google.com
  - Create profile
  - Add all business information
  - Verify business (Google will send code)

### Week 1:
- [ ] Social media announcement
- [ ] Update Facebook page with website link
- [ ] Email existing clients about new website
- [ ] Test everything multiple times
- [ ] Monitor form submissions
- [ ] Check email is working

### Week 2:
- [ ] Submit to business directories
- [ ] Ask clients for reviews
- [ ] Share on WhatsApp status
- [ ] Print website on business cards
- [ ] Monitor Google Analytics

---

## 🔧 Troubleshooting Common Issues

### Website Not Loading:
**Problem:** Domain doesn't show website
**Solution:** 
- Wait 24-48 hours for DNS propagation
- Check nameservers are correct
- Clear browser cache
- Try incognito/private mode

### Images Not Showing:
**Problem:** Broken image icons
**Solution:**
- Check image files uploaded correctly
- Verify file names match HTML (case-sensitive)
- Check file extensions (.jpg not .JPG)
- Ensure images in correct folder

### Forms Not Working:
**Problem:** Forms don't send emails
**Solution:**
- Use FormSubmit or Formspree
- Check email address is correct
- Test with different email
- Add spam protection

### SSL Not Working:
**Problem:** "Not Secure" warning
**Solution:**
- Wait for SSL to activate (can take 20 minutes)
- Check SSL installed in cPanel
- Force HTTPS in .htaccess
- Check all resources load via HTTPS

### Mobile Menu Not Working:
**Problem:** Hamburger menu doesn't open
**Solution:**
- Check main.js uploaded correctly
- Verify JavaScript has no errors (F12 in browser)
- Test on different mobile devices
- Clear mobile browser cache

### Email Not Receiving:
**Problem:** Forms submitted but no email
**Solution:**
- Check spam/junk folder
- Verify email account created correctly
- Test with different recipient email
- Use FormSubmit instead of mailto

---

## 💰 Total Launch Costs

### Year 1:
- Domain: $10-15
- Hosting: $60-240 (depending on provider)
- SSL: $0 (usually free with hosting)
- Email: $0 (usually free with hosting)
- **Total: $70-255 first year**

### Yearly Renewal:
- Domain: $10-15/year
- Hosting: $60-240/year
- **Total: $70-255/year**

### Optional:
- Premium hosting: +$120/year
- Premium email: +$60/year
- Backup service: +$50/year
- CDN (faster loading): +$100/year

---

## 📞 Support Resources

### Hosting Support:
Most hosting companies offer:
- 24/7 live chat support
- Email support (24-48 hour response)
- Phone support (business hours)
- Knowledge base/tutorials
- Video guides

### When to Contact Support:
- Can't access cPanel
- Email not working
- SSL issues
- Server is down
- Need help uploading files
- Database errors (if you add database later)

### What to Have Ready:
- Domain name
- Hosting account username
- Brief description of problem
- Screenshots if possible
- Error messages (exact text)

---

## 🎯 Success Metrics

### Track These After Launch:

**Week 1:**
- Website loads correctly ✓
- All pages accessible ✓
- Forms sending emails ✓
- 10+ visitors
- 0 error reports

**Month 1:**
- 50+ website visitors
- 5+ form submissions
- 10+ Google reviews
- Indexed in Google
- No technical issues

**Month 3:**
- 200+ monthly visitors
- 20+ form submissions
- Appearing in local search results
- Client feedback positive

**Month 6:**
- 500+ monthly visitors
- First page rankings for some keywords
- Steady inquiry flow
- Website ROI positive

---

## ✅ POST-LAUNCH CHECKLIST

### Immediately After Launch:
- [ ] Test website loads at havenprinting.com
- [ ] Test all pages
- [ ] Test all forms
- [ ] Test on mobile phone
- [ ] Verify email works
- [ ] Check SSL certificate (green padlock)
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Create Google Business Profile
- [ ] Announce on social media

### First Week:
- [ ] Monitor form submissions daily
- [ ] Check Google Analytics daily
- [ ] Respond to all inquiries within 24 hours
- [ ] Ask first clients for reviews
- [ ] Share website link everywhere
- [ ] Update email signature with website
- [ ] Print website on marketing materials

### First Month:
- [ ] Add 5-10 more portfolio photos
- [ ] Get 10+ Google reviews
- [ ] Build 5+ backlinks
- [ ] Post on social media regularly
- [ ] Update FAQ based on questions received
- [ ] Fix any issues reported by visitors
- [ ] Back up website files

---

## 🚨 IMPORTANT REMINDERS

### Security:
- ✅ Keep hosting login credentials safe
- ✅ Use strong passwords (12+ characters)
- ✅ Enable 2-factor authentication if available
- ✅ Back up website monthly
- ✅ Update software/plugins if added later
- ✅ Monitor for suspicious activity

### Maintenance:
- ✅ Renew domain before expiration
- ✅ Renew hosting before expiration
- ✅ Update content monthly
- ✅ Check forms work regularly
- ✅ Monitor Google Search Console for errors
- ✅ Test website speed monthly
- ✅ Update photos as you complete projects

### Don't Forget:
- ✅ Set domain auto-renewal ON
- ✅ Set hosting auto-renewal ON
- ✅ Keep backup of all website files
- ✅ Save all login credentials securely
- ✅ Document any changes made
- ✅ Keep this guide for reference

---

## 🎉 YOU'RE READY TO LAUNCH!

Follow this guide step-by-step and your website will be live within 1-3 days!

**Next Steps:**
1. Register domain (30 minutes)
2. Purchase hosting (30 minutes)
3. Upload files (1-2 hours)
4. Install SSL (30 minutes)
5. Test everything (2-3 hours)
6. Launch! 🚀

**Need Help?**
- Hosting support chat (24/7)
- YouTube tutorials (search "how to upload website to cPanel")
- Hire freelancer on Fiverr ($20-50 to deploy)
- Local web developer in Liberia

---

**Good luck with your launch!**

*Haven Printing Company INC*  
*Paynesville, Liberia*  
*"Name One Thing We Can't Print"*
