# Website Customization Guide

This guide will help you customize your Academic Pages website. Follow the steps below in order.

## Quick Start Checklist

- [ ] **Step 1**: Update basic site information in `_config.yml`
- [ ] **Step 2**: Add your profile picture
- [ ] **Step 3**: Customize the navigation menu in `_data/navigation.yml`
- [ ] **Step 4**: Update the About page (`_pages/about.md`)
- [ ] **Step 5**: Add your content (publications, talks, etc.)
- [ ] **Step 6**: Set up analytics (optional)

---

## Step 1: Update Basic Site Information

**File to modify**: `_config.yml`

Look for comments marked with `# MODIFY:` or `# TODO:` in this file. Here are the key fields to update:

### Essential Settings (Lines 10-19)
- **site_theme**: Choose from "default", "air", "sunrise", "mint", "dirt", or "contrast"
- **title**: Replace "Your Name / Site Title" with your actual name
- **name**: Same as title
- **description**: Write a brief description (e.g., "PhD student in Computer Science")
- **url**: Change to `https://[your-github-username].github.io`
- **repository**: Change to `your-username/your-username.github.io`

### Author Information (Lines 21-33)
- **avatar**: Filename of your profile picture (add image to `/images/` folder first)
- **name**: Your name for the sidebar
- **bio**: A short biography (1-2 sentences)
- **location**: Your city/country
- **employer**: Your university or company
- **email**: Your email address

### Social Links (Lines 35-83)
Update only the platforms you use. Remove or leave blank the ones you don't use:
- **Academic**: googlescholar, orcid, researchgate, etc.
- **Coding**: github (important!), stackoverflow, kaggle
- **Social Media**: twitter, linkedin, mastodon, etc.

---

## Step 2: Add Your Profile Picture

1. Find or create a profile picture (square format works best, recommended: 200x200px or larger)
2. Save it in the `/images/` folder
3. Update the `avatar` field in `_config.yml` with the filename (e.g., "profile.png" or "my-photo.jpg")

---

## Step 3: Customize Navigation Menu

**File to modify**: `_data/navigation.yml`

Remove sections you don't need by commenting them out (add `#` at the start of lines):

```yaml
# Example: To remove "Teaching" from navigation
# - title: "Teaching"
#   url: /teaching/
```

Common modifications:
- **No publications yet?** Comment out the Publications section
- **Don't teach?** Comment out the Teaching section
- **No blog?** Comment out the Blog Posts section
- **Want to add a section?** Copy the format and add your own

---

## Step 4: Update the About Page

**File to modify**: `_pages/about.md`

1. Change the `title` in the front matter (between the `---` marks)
2. Replace the template content with your own introduction
3. Tell visitors:
   - Who you are
   - What you do
   - Your research interests
   - Your background
   - How to contact you

**Tip**: Use Markdown formatting (see the Guide page on your site for help)

---

## Step 5: Add Your Content

### Publications
- **Location**: `_publications/` folder
- **How**: Create `.md` files for each publication (see existing examples)
- **Template**: Copy an existing file and modify it

### Talks
- **Location**: `_talks/` folder
- **How**: Create `.md` files for each talk

### Teaching
- **Location**: `_teaching/` folder
- **How**: Create `.md` files for each course

### Blog Posts
- **Location**: `_posts/` folder
- **Format**: Filename must be `YYYY-MM-DD-title.md`

### CV
- **Location**: `_pages/cv.md`
- **How**: Edit the existing file with your information

### Portfolio
- **Location**: `_portfolio/` folder
- **How**: Create `.md` files for each project

---

## Step 6: Optional - Set Up Analytics

**File to modify**: `_config.yml` (lines 157-161)

To track visitors to your site:

1. Sign up for [Google Analytics 4](https://analytics.google.com/)
2. Create a property for your website
3. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
4. Update `_config.yml`:
   ```yaml
   analytics:
     provider: "google-analytics-4"
     google:
       tracking_id: "G-XXXXXXXXXX"  # Your actual ID
   ```

---

## Important Notes

### Testing Locally
To preview changes before publishing:
```bash
bundle install
bundle exec jekyll serve -l -H localhost
```
Then visit `http://localhost:4000` in your browser.

### Publishing Changes
After making changes:
1. Save your files
2. Commit to git: `git add .` then `git commit -m "Update site"`
3. Push to GitHub: `git push`
4. Your site will update automatically in a few minutes

### Common Issues

**Profile picture not showing?**
- Make sure the image file is in the `/images/` folder
- Check that the filename in `_config.yml` matches exactly (including extension)
- Image should be reasonable size (not too large)

**Navigation link broken?**
- Make sure the corresponding page exists in `_pages/` folder
- Check that the permalink in the page's front matter matches the URL in `navigation.yml`

**Changes not appearing?**
- If testing locally, restart Jekyll server after changing `_config.yml`
- If on GitHub, wait 2-5 minutes for the site to rebuild
- Check the Actions tab in your GitHub repository for build errors

---

## Files You Should Modify

✅ **Must modify**:
- `_config.yml` - Site configuration
- `_pages/about.md` - Homepage content
- `_data/navigation.yml` - Menu items

✅ **Should modify** (to add your content):
- Files in `_publications/`, `_talks/`, `_teaching/`, `_posts/`, `_portfolio/`
- `_pages/cv.md` - Your CV

⚠️ **Be careful modifying**:
- Files in `_includes/` - Template components
- Files in `_layouts/` - Page layouts
- Files in `_sass/` - Styles

❌ **Don't modify** (unless you know what you're doing):
- `Gemfile` and `Gemfile.lock`
- Files in `assets/`
- Jekyll configuration in `_config.yml` beyond the marked sections

---

## Getting Help

- **Template Documentation**: [Academic Pages Guide](https://academicpages.github.io/)
- **Markdown Help**: See the Guide page on your site (`/markdown/`)
- **Jekyll Documentation**: [jekyllrb.com](https://jekyllrb.com/)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/en/pages)

---

## Next Steps

1. Work through the checklist at the top of this file
2. Test your changes locally before pushing
3. Gradually add your content (publications, talks, etc.)
4. Share your website URL: `https://your-username.github.io`

Good luck with your website! 🚀
