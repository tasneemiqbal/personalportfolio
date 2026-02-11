# Portfolio v3 - Dark Mode & Profile Picture Update

## New Features! 🎉

### 1. Dark Mode Toggle 🌙☀️
- **Toggle button** in the navigation (moon/sun icon)
- **Remembers your choice** using localStorage
- **Smooth transitions** between themes
- **All sections** fully styled for both light and dark modes

**How to use:**
- Click the moon/sun icon in the top navigation
- Your preference is saved automatically
- Default is light mode

### 2. Profile Picture 📸
- **Professional photo display** in the About section
- **Hover animation** - lifts and rotates slightly
- **"Available for hire" badge** with pulsing dot
- **Quick facts cards** with your info

**How to add your photo:**
1. Take a professional photo (headshot or casual professional)
2. Save it as `profile.jpg` or `profile.png`
3. Put it in the `images/` folder
4. Refresh the page - done!

**Photo specs:**
- Size: At least 500x500 pixels
- Format: JPG or PNG
- File size: Under 2MB recommended
- Square ratio works best

**Don't have a photo yet?**
- A nice placeholder will show
- You can add it anytime later
- See `images/INSTRUCTIONS.txt` for details

### 3. Quick Facts Section
Three cards showing:
- 🎓 Education: CS @ CSULB
- 📍 Location: Long Beach, CA
- 🎯 Seeking: APM/PM Roles

These are in the About section below your photo!

## What Changed in the Code

### Files Updated:
- ✅ `index.html` - Added theme toggle button & profile section
- ✅ `css/styles.css` - CSS variables for theming & profile styles
- ✅ `js/script.js` - Dark mode toggle function & localStorage
- ✅ `images/INSTRUCTIONS.txt` - Guide for adding your photo
- ✅ `images/profile-placeholder.svg` - Placeholder if no photo

### CSS Variables System:
Now using CSS variables for colors that automatically switch:
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- `--text-primary`, `--text-secondary`, `--text-tertiary`
- `--accent`, `--accent-light`, `--accent-lighter`
- `--border-color`, `--shadow`

This makes dark mode work seamlessly!

## Testing Checklist

Before deploying, make sure:
- [ ] Dark mode toggle works smoothly
- [ ] Your profile photo is added (or placeholder shows)
- [ ] Quick facts have your correct info
- [ ] Navigation still works
- [ ] All sections look good in both themes
- [ ] Mobile responsive still works

## Customization Tips

### Update Quick Facts:
In `index.html`, find the `.quick-fact` divs and update:
```html
<div class="quick-fact">
    <span class="fact-icon">🎓</span>
    <div>
        <strong>Your Label</strong>
        <p>Your Info</p>
    </div>
</div>
```

### Change Accent Color:
In `css/styles.css`, search for `#d4704a` and replace with your brand color!

### Update Status Badge:
Change "Available for hire" to anything you want in the `.profile-status` div.

## Browser Compatibility

Works on:
- ✅ Chrome, Firefox, Safari, Edge (latest)
- ✅ Mobile browsers (iOS, Android)
- ✅ Dark mode respects system preferences on first visit

---

Enjoy your new features! 🚀
Any questions? Email: tasneemiqbal417@gmail.com
