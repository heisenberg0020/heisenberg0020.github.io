# Summary of Commented Modification Points

This document provides a quick reference to all the places in the codebase that have been commented for modification.

## 📋 Quick Reference

### Primary Configuration Files

1. **`_config.yml`** - Main site configuration (most important!)
   - 8 TODO sections
   - 20+ MODIFY points
   - Lines: 10-170 (most critical customizations)

2. **`_data/navigation.yml`** - Navigation menu
   - TODO section at top
   - MODIFY comments for each menu item
   - Lines: 1-47

3. **`_pages/about.md`** - Homepage content
   - TODO in front matter
   - HTML comments for content sections
   - Lines: 1-30

4. **`CUSTOMIZATION_GUIDE.md`** - Complete step-by-step guide
   - Full customization checklist
   - Detailed instructions for each section
   - Troubleshooting tips

---

## 🎯 Files Modified with Comments

### `_config.yml` - Complete List of Modification Points

**Basic Site Settings (Lines 10-20)**
```yaml
# TODO: Modify the following settings to personalize your site
- locale (optional)
- site_theme (MODIFY - choose your theme)
- title (MODIFY - your name)
- name (MODIFY - your name)
- description (MODIFY - your tagline)
- url (MODIFY - your GitHub Pages URL)
- repository (MODIFY - your repo name)
```

**Author Information (Lines 27-35)**
```yaml
# TODO: Update all the following fields with your personal information
- avatar (MODIFY - profile picture filename)
- name (MODIFY - sidebar name)
- pronouns (OPTIONAL)
- bio (MODIFY - short biography)
- location (MODIFY - city/country)
- employer (MODIFY - university/company)
- uri (OPTIONAL)
- email (MODIFY - your email)
```

**Academic Websites (Lines 38-51)**
```yaml
# TODO: Add links to your academic profiles
- academia (OPTIONAL)
- arxiv (OPTIONAL)
- googlescholar (MODIFY if you have one)
- inspire-hep (OPTIONAL)
- impactstory (OPTIONAL)
- orcid (MODIFY if you have one)
- semantic (OPTIONAL)
- ssrn (OPTIONAL)
- pubmed (MODIFY or remove)
- researchgate (OPTIONAL)
- scopus (OPTIONAL)
- zotero (OPTIONAL)
```

**Development Platforms (Lines 55-61)**
```yaml
# TODO: Add your usernames for coding/development platforms
- bitbucket (OPTIONAL)
- codepen (OPTIONAL)
- dribbble (OPTIONAL)
- github (MODIFY - important!)
- kaggle (OPTIONAL)
- stackoverflow (OPTIONAL)
```

**Social Media (Lines 65-84)**
```yaml
# TODO: Add your social media usernames/handles
- artstation (OPTIONAL)
- bluesky (MODIFY if you use it)
- facebook (OPTIONAL)
- flickr (OPTIONAL)
- foursquare (OPTIONAL)
- goodreads (OPTIONAL)
- google_plus (OPTIONAL)
- keybase (OPTIONAL)
- instagram (OPTIONAL)
- lastfm (OPTIONAL)
- linkedin (OPTIONAL)
- mastodon (OPTIONAL)
- medium (OPTIONAL)
- pinterest (OPTIONAL)
- soundcloud (OPTIONAL)
- steam (OPTIONAL)
- telegram (OPTIONAL)
- tumblr (OPTIONAL)
- twitter (OPTIONAL)
- vine (OPTIONAL)
- weibo (OPTIONAL)
- wikipedia (OPTIONAL)
- xing (OPTIONAL)
- youtube (OPTIONAL)
- zhihu (OPTIONAL)
```

**Publication Categories (Lines 94-102)**
```yaml
# TODO: Customize these categories based on your publication types
- books (MODIFY title or remove)
- manuscripts (MODIFY title)
- conferences (MODIFY title)
```

**Site Settings (Lines 104-110)**
```yaml
- teaser (OPTIONAL)
- breadcrumbs (MODIFY if you want them)
- words_per_minute (keep default)
- read_more (MODIFY to enable/disable)
- talkmap_link (MODIFY to enable/disable)
```

**SEO Related (Lines 143-146)**
```yaml
# TODO: Add verification codes if you want to track your site
- google_site_verification (OPTIONAL)
- bing_site_verification (OPTIONAL)
- alexa_site_verification (OPTIONAL)
- yandex_site_verification (OPTIONAL)
```

**Analytics (Lines 169-173)**
```yaml
# TODO: Set up Google Analytics to track your site visitors
- provider (MODIFY to "google-analytics-4")
- tracking_id (MODIFY with your GA4 ID)
```

---

### `_data/navigation.yml` - Modification Points

**Header (Lines 1-18)**
```yaml
# TODO: Customize the navigation menu for your website
# HOW TO MODIFY section with instructions
# EXAMPLE CUSTOMIZATIONS provided
```

**Menu Items (Lines 20-47)**
```yaml
# MODIFY: Comment out sections you don't want
- Publications (MODIFY/remove if not needed)
- Talks (MODIFY/remove if not needed)
- Teaching (MODIFY/remove if not needed)
- Portfolio (MODIFY/remove if not needed)
- Blog Posts (MODIFY/remove if not needed)
- CV (choose one of two options)
- Guide (MODIFY/remove if not needed)
```

---

### `_pages/about.md` - Modification Points

**Front Matter (Lines 1-8)**
```yaml
# TODO: This is the front matter (metadata) for your homepage
- title (MODIFY with your own title/tagline)
- author_profile (keep as true)
```

**Content (Lines 10+)**
```html
<!-- TODO: Replace the content below with your own introduction -->
<!-- MODIFY: Replace the sections below with your own content -->
```

---

## 📁 Additional Files to Customize

While not commented in detail, you should also modify:

### Content Files (create/edit your own):
- `_publications/*.md` - Your publications
- `_talks/*.md` - Your talks and presentations
- `_teaching/*.md` - Courses you teach
- `_posts/*.md` - Blog posts (format: YYYY-MM-DD-title.md)
- `_portfolio/*.md` - Your projects
- `_pages/cv.md` - Your CV/resume

### Profile Picture:
- Add your photo to `/images/` folder
- Update `avatar` field in `_config.yml`

---

## 🔍 How to Find Comments

### Search for modification markers:
```bash
# Find all TODO comments
grep -r "# TODO:" _config.yml _data/ _pages/

# Find all MODIFY comments
grep -r "# MODIFY:" _config.yml _data/ _pages/

# Find all OPTIONAL comments
grep -r "# OPTIONAL:" _config.yml
```

### In your text editor:
- Search for `TODO` to find sections that need attention
- Search for `MODIFY` to find specific fields to update
- Search for `OPTIONAL` to find fields you can skip

---

## ✅ Modification Checklist

Use this checklist as you customize your site:

### Essential (Must Do):
- [ ] Update `title` in `_config.yml`
- [ ] Update `name` in `_config.yml`
- [ ] Update `description` in `_config.yml`
- [ ] Update `url` in `_config.yml`
- [ ] Update `repository` in `_config.yml`
- [ ] Update `avatar` (add your photo)
- [ ] Update author `name` in sidebar
- [ ] Update `bio`
- [ ] Update `location`
- [ ] Update `employer`
- [ ] Update `email`
- [ ] Update `github` username
- [ ] Customize `_data/navigation.yml` (remove unused sections)
- [ ] Update `_pages/about.md` with your content

### Academic (If Applicable):
- [ ] Add `googlescholar` link
- [ ] Add `orcid` link
- [ ] Add `researchgate` link
- [ ] Update `pubmed` or remove
- [ ] Add publications to `_publications/`
- [ ] Add talks to `_talks/`
- [ ] Update CV in `_pages/cv.md`

### Social Media (Optional):
- [ ] Add `linkedin` username
- [ ] Add `twitter` username
- [ ] Add `bluesky` username
- [ ] Add other social media as needed

### Advanced (Optional):
- [ ] Choose a different `site_theme`
- [ ] Enable `breadcrumbs`
- [ ] Set up Google Analytics
- [ ] Add SEO verification codes
- [ ] Customize publication categories

---

## 📚 Documentation Files

1. **`CUSTOMIZATION_GUIDE.md`** - Step-by-step customization instructions
2. **`MODIFICATIONS_SUMMARY.md`** (this file) - Quick reference for all modification points
3. **`README.md`** - Updated with links to customization guides
4. **Comments in code** - Inline `TODO` and `MODIFY` markers throughout config files

---

## 🚀 Next Steps

1. Read the [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
2. Work through the checklist above
3. Look for `# TODO:` and `# MODIFY:` comments in files
4. Test locally: `bundle exec jekyll serve -l -H localhost`
5. Push to GitHub and verify your site

---

## ⚡ Quick Start Command

To see all modification points at once:
```bash
# Show all TODO and MODIFY comments
grep -n "# TODO:\|# MODIFY:" _config.yml _data/navigation.yml
```

Good luck customizing your site! 🎉
