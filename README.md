# ZebraGo Website Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [How to Add Content](#how-to-add-content)
   - [Adding Carousel Slides](#adding-carousel-slides)
   - [Adding Images](#adding-images)
   - [Adding News Articles](#adding-news-articles)
   - [Adding Products](#adding-products)
   - [Updating Statistics](#updating-statistics)
5. [Language System](#language-system)
6. [Customization Guide](#customization-guide)
7. [Technical Details](#technical-details)

---

## 🎯 Project Overview

This is a multilingual website prototype for **ZebraGo (斑馬線ZebraGo)**, a mobile mental health and inclusion service vehicle. The website is built with vanilla HTML, CSS, and JavaScript, featuring:

- **3 Languages**: Traditional Chinese (繁體中文), Simplified Chinese (简体中文), and English
- **Responsive Design**: Mobile-first approach with tablet and desktop support
- **Accessibility Features**: Font size controls, smooth scrolling, keyboard navigation
- **Dynamic Content**: Carousel, language switching, product galleries

---

## ✨ Features

### Core Features

1. **Multi-language Support**
   - Traditional Chinese (繁體中文) - Default
   - Simplified Chinese (简体中文)
   - English (ENG)
   - Language preference saved in browser localStorage
   - Automatic page title translation

2. **Responsive Design**
   - Mobile-first responsive layout
   - Breakpoints: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)
   - Touch-friendly navigation and interactions

3. **Accessibility Features**
   - Font size controls (Small, Medium, Large)
   - Zoom level persistence (saved in localStorage)
   - Keyboard navigation support
   - ARIA labels for screen readers
   - Smooth scrolling for anchor links

4. **Interactive Carousel**
   - Auto-play functionality (5-second intervals)
   - Manual navigation (prev/next buttons, indicators)
   - Touch/swipe support for mobile
   - Keyboard navigation (arrow keys)
   - Pause on hover

5. **Dynamic Content Management**
   - News article grid with external links
   - Product gallery with image carousel
   - Partner organization scrolling display
   - Statistics display

6. **Navigation Features**
   - Fixed header with scroll shadow effect
   - Mobile hamburger menu
   - Dropdown menus for services and support sections
   - Active page highlighting

7. **Special Features**
   - Product image carousel with swipe/drag support
   - Special events section with PDF links
   - Google Maps integration
   - Social media links integration
   - Centralized link management system (all navigation, footer, and social links in one file)

---

## 📁 File Structure

```
BCSS_Website/
│
├── index.html              # Homepage
├── pages/                  # All page files
│   ├── about.html
│   ├── contact.html
│   ├── news.html
│   ├── products.html
│   ├── corporate.html
│   ├── individual.html
│   ├── school.html
│   ├── special-projects.html
│   ├── support.html
│   ├── privacy.html
│   ├── disclaimer.html
│   ├── copyright.html
│   ├── ip-protection.html
│   └── 404.html
│
├── css/
│   └── style.css           # All styles (6000+ lines)
│
├── js/
│   ├── main.js            # Core functionality
│   ├── carousel.js        # Carousel functionality
│   ├── language.js        # Language switching system
│   └── siteLinks.js       # Centralized link management (social media, navigation, footer, logos)
│
├── images/                # All image assets
│   ├── Mainpage/
│   │   ├── banner/        # Logos, social icons
│   │   ├── carousel/       # Carousel background images
│   │   ├── introduction/  # Service icons, SDG images
│   │   ├── stats/          # Stat icons, partner logos
│   │   └── support/        # Support section images
│   ├── About/             # About page images
│   ├── Contact/           # Contact page icons
│   ├── News/              # News article images
│   ├── Services/          # Service page images
│   ├── Merchandise/       # Product images
│   └── Special/           # Special events images
│
├── videos/
│   └── zebrago-intro.mp4  # About page video
│
├── PRE-LAUNCH_CHECKLIST.md
├── DEVELOPER_DISCLAIMER.txt
└── README.md
```

---

## 📝 How to Add Content

### Adding Carousel Slides

The carousel is located on the homepage (`index.html`). To add a new slide:

1. **Add the slide HTML** in the `.carousel-container` section:

```html
<!-- Slide 4 (Example) -->
<div class="carousel-slide" style="background-image: url('images/Mainpage/carousel/image4.jpg');">
    <div class="carousel-content">
        <div class="container">
            <h2 data-lang="carousel.slide4.title">Your Title Here</h2>
            <p data-lang="carousel.slide4.text1">First paragraph text</p>
            <p data-lang="carousel.slide4.text2">Second paragraph text</p>
            <a href="pages/your-page.html" class="btn-primary" data-lang="carousel.slide4.button">Button Text</a>
        </div>
    </div>
</div>
```

2. **Add the indicator dot** in the `.carousel-indicators` section:

```html
<button class="indicator" data-slide="3" aria-label="Slide 4"></button>
```

3. **Add translations** in `js/language.js`:

```javascript
// In the 'zh-HK' object:
'carousel.slide4.title': 'Your Title in Traditional Chinese',
'carousel.slide4.text1': 'First paragraph in Traditional Chinese',
'carousel.slide4.text2': 'Second paragraph in Traditional Chinese',
'carousel.slide4.button': 'Button Text in Traditional Chinese',

// In the 'zh-CN' object:
'carousel.slide4.title': 'Your Title in Simplified Chinese',
// ... (same pattern)

// In the 'en' object:
'carousel.slide4.title': 'Your Title in English',
// ... (same pattern)
```

4. **Add the background image**:
   - Place image in `images/Mainpage/carousel/`
   - Recommended size: 1920x1080px or similar aspect ratio
   - Format: JPG or PNG
   - Optimize for web (compress if needed)

**Note:** The carousel automatically handles any number of slides. The JavaScript will work with 1, 2, 3, or more slides.

---

### Adding Images

#### General Image Guidelines

1. **Image Formats**: Use JPG for photos, PNG for logos/icons with transparency
2. **Optimization**: Compress images before adding (use tools like TinyPNG)
3. **Naming**: Use descriptive, lowercase names with hyphens (e.g., `service-icon-1.png`)
4. **Alt Text**: Always add descriptive alt text for accessibility

#### Adding Images to Pages

**Method 1: Using data-lang for translatable alt text**

```html
<img src="images/your-folder/image.jpg" alt="Default alt text" data-lang="image.alt.yourImage">
```

Then add to `js/language.js`:
```javascript
'image.alt.yourImage': 'Alt text in Traditional Chinese',
// Add for zh-CN and en as well
```

**Method 2: Direct alt text (if not translatable)**

```html
<img src="images/your-folder/image.jpg" alt="Descriptive alt text">
```

#### Image Paths

- **From root HTML files** (index.html): `images/folder/image.jpg`
- **From pages/** (pages/about.html): `../images/folder/image.jpg`

---

### Adding News Articles

News articles are displayed on `pages/news.html`. To add a new article:

1. **Add the article card** in the `.news-grid` section:

```html
<a href="https://external-article-url.com" target="_blank" class="news-card-link">
    <article class="news-card">
        <div class="news-image-container">
            <img src="../images/News/m7.jpg" alt="Article Title" class="news-image">
        </div>
        <div class="news-content">
            <h3 class="news-title">Article Title Here...</h3>
            <p class="news-date">2025年1月15日</p>
        </div>
    </article>
</a>
```

2. **Add the image**:
   - Place in `images/News/`
   - Recommended size: 800x600px or similar
   - Name it sequentially (m7.jpg, m8.jpg, etc.)

3. **Update the date** in the format: `YYYY年MM月DD日`

**Note:** Articles are displayed in the order they appear in HTML. Newest articles should be added at the top of the grid.

---

### Adding Products

Products are displayed on `pages/products.html`. To add a new product:

1. **Add the product card** in the `.products-grid` section:

```html
<div class="product-card">
    <div class="product-image-container">
        <div class="product-image-wrapper" data-product="3">
            <img src="../images/Merchandise/m3/p1.png" alt="Product Name" class="product-image">
            <!-- Add more images for carousel if needed -->
            <img src="../images/Merchandise/m3/p2.png" alt="Product Name" class="product-image">
        </div>
        <div class="product-image-dots" data-product="3">
            <button class="product-image-dot active" data-index="0" aria-label="Image 1"></button>
            <button class="product-image-dot" data-index="1" aria-label="Image 2"></button>
        </div>
    </div>
    <div class="product-info">
        <div class="product-header">
            <h3 class="product-name" data-lang="products.item3.name">Product Name</h3>
            <span class="product-price-tag" data-lang="products.item3.price">HK$ 200</span>
        </div>
        <p class="product-description" data-lang="products.item3.description">
            Product description here...
        </p>
        <a href="https://your-google-form-url" target="_blank" class="product-add-to-cart" data-lang="products.addToCart">立即購買</a>
    </div>
</div>
```

2. **Add product images**:
   - Create folder: `images/Merchandise/m3/`
   - Add images: `p1.png`, `p2.png`, etc.
   - Recommended size: 800x800px (square)

3. **Add translations** in `js/language.js`:

```javascript
// In all three language objects (zh-HK, zh-CN, en):
'products.item3.name': 'Product Name',
'products.item3.price': 'HK$ 200',
'products.item3.description': 'Product description...',
```

**Note:** 
- The `data-product` attribute must match between wrapper and dots
- For single image products, only one dot is needed
- The product carousel supports swipe/drag on mobile and desktop

---

### Updating Statistics

Statistics are displayed on the homepage. To update:

1. **Find the stats section** in `index.html`:

```html
<div class="stat-item">
    <div class="stat-icon">
        <img src="images/Mainpage/stats/school.png" alt="服務學校">
    </div>
    <h3 class="stat-label" data-lang="stats.schools">服務學校</h3>
    <p class="stat-value">100+</p>  <!-- Update this number -->
</div>
```

2. **Update the number** in the `<p class="stat-value">` element

3. **Update translations** if the label changes (in `js/language.js`)

---

## 🌐 Language System

### How It Works

The website uses a JavaScript-based translation system stored in `js/language.js`. All translatable content uses `data-lang` attributes that reference keys in the translation object.

### Translation Structure

```javascript
const translations = {
    'zh-HK': {
        'key.name': 'Traditional Chinese Text',
        // ... more translations
    },
    'zh-CN': {
        'key.name': 'Simplified Chinese Text',
        // ... more translations
    },
    'en': {
        'key.name': 'English Text',
        // ... more translations
    }
};
```

### Adding New Translations

1. **Add the data-lang attribute** to HTML:

```html
<p data-lang="new.key.name">Default Text</p>
```

2. **Add translations** in `js/language.js`:

```javascript
// In 'zh-HK' object:
'new.key.name': '繁體中文文字',

// In 'zh-CN' object:
'new.key.name': '简体中文文字',

// In 'en' object:
'new.key.name': 'English Text',
```

### Special Translation Attributes

- `data-lang`: Standard text translation
- `data-lang-html`: For HTML content (allows HTML tags in translation)
- `data-lang-switch`: For language switcher buttons

### Language Persistence

User's language preference is saved in `localStorage` and persists across page visits.

---

## 🎨 Customization Guide

### Changing Colors

Colors are defined as CSS variables in `css/style.css`:

```css
:root {
    --primary-green: #2D9CDB;      /* Main brand color */
    --dark-green: #1E6FA8;         /* Hover states */
    --light-green: #E0F7FA;        /* Backgrounds */
    --text-dark: #333;             /* Main text */
    --text-light: #666;             /* Secondary text */
    --white: #ffffff;               /* White */
}
```

Change these values to update colors site-wide.

### Changing Fonts

Font family is set in the `body` selector:

```css
body {
    font-family: 'Microsoft JhengHei', 'PingFang TC', 'Apple LiGothic Medium', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

### Modifying Carousel Settings

In `js/carousel.js`, you can adjust:

```javascript
this.autoPlayDelay = 5000; // Change to milliseconds (5000 = 5 seconds)
```

### Adjusting Font Size Controls

In `js/main.js`, zoom levels can be modified:

```javascript
const zoomLevels = {
    'small': '1',      // 100% zoom
    'medium': '1.2',   // 120% zoom
    'large': '1.5'     // 150% zoom
};
```

---

## 🔧 Technical Details

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11+ (with some limitations)

### JavaScript Features Used

- ES6+ features (const, let, arrow functions, classes)
- localStorage API
- DOM manipulation
- Event listeners
- Touch events

### CSS Features Used

- CSS Grid
- Flexbox
- CSS Variables (Custom Properties)
- Media queries
- Transitions and animations

### Dependencies

**None!** This is a vanilla JavaScript project with no external dependencies.

### Performance Considerations

- Images should be optimized before upload
- Video file should be compressed
- Consider lazy loading for images below the fold (future enhancement)

### Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Font size controls for readability

---

## 📱 Responsive Breakpoints

The website uses these breakpoints (defined in CSS):

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-Specific Features

- Hamburger menu
- Touch swipe for carousel
- Touch swipe for product images
- Font size defaults to "small" on mobile/tablet

---

## 🔍 Common Tasks

### Updating Contact Information

Edit `pages/contact.html`:
- Address, phone, fax, email
- Google Maps embed URL

### Adding Partner Logos

1. Add logo image to `images/Mainpage/stats/partner/`
2. Add to the scrolling partners section in `index.html`:

```html
<div class="partner-item">
    <img src="images/Mainpage/stats/partner/new-partner.png" alt="Partner Name">
</div>
```

### Updating Social Media Links

**All social media links are now centralized in `js/siteLinks.js`.** To update social media links:

1. Open `js/siteLinks.js`
2. Find the `socialLinksConfig` object
3. Update the URL for the desired platform:

```javascript
const socialLinksConfig = {
    facebook: {
        url: 'https://your-new-facebook-url.com',  // Update this
        ariaLabel: 'Facebook',
        icon: 'facebook.png'
    },
    // ... other platforms
};
```

**Note:** Changes in `siteLinks.js` will automatically apply to all pages. You no longer need to edit individual HTML files.

### Updating Navigation and Footer Links

**All navigation and footer links are also centralized in `js/siteLinks.js`:**

- **Navigation links:** Edit the `navigationConfig` object
- **Footer links:** Edit the `footerLinksConfig` object  
- **Logo links:** Edit the `logoLinksConfig` object

Changes will automatically apply to all pages across the website.

### Changing Copyright Year

Search and replace `©2026` in all HTML files, or use find/replace in your editor.

### Updating Links (Centralized System)

**All site links are now managed in `js/siteLinks.js`:**

- **Social Media Links:** Edit `socialLinksConfig` object
- **Navigation Menu:** Edit `navigationConfig` object
- **Footer Links:** Edit `footerLinksConfig` object
- **Logo Links:** Edit `logoLinksConfig` object

This centralized system means you only need to update links in one place, and changes will automatically apply to all 15 pages across the website.

---

## ⚠️ Important Notes

1. **Always test** after making changes
2. **Update all three languages** when adding new translatable content
3. **Optimize images** before adding to maintain performance
4. **Check mobile responsiveness** after layout changes
5. **Verify links** are working after updates
6. **Backup files** before making major changes

---

## 📞 Support

For questions about the website structure or functionality, refer to:
- `PRE-LAUNCH_CHECKLIST.md` - Pre-launch review checklist
- `DEVELOPER_DISCLAIMER.txt` - Developer disclaimer and responsibilities

---

## 📄 License

This is a prototype website. See `DEVELOPER_DISCLAIMER.txt` for legal information.

---

**Last Updated**: 2025  
**Version**: 1.0
