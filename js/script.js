// ==========================================
// TASNEEM IQBAL - PORTFOLIO JAVASCRIPT
// ==========================================

// Dark Mode Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = newTheme === 'dark' ? 'Light' : 'Dark';
    }

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
        toggle.setAttribute('aria-label', newTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }

    // Add transition effect
    document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? 'Light' : 'Dark';
    }

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.setAttribute('aria-pressed', savedTheme === 'dark' ? 'true' : 'false');
        toggle.setAttribute('aria-label', savedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
});

// Scroll detection for navigation
window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/*
 * Both tab groups (skills categories, experience employers) share this one
 * implementation. It follows the ARIA tabs pattern: a roving tabindex so the
 * group is a single tab stop, and arrow/Home/End keys to move between tabs.
 * `key` is the data-attribute the tabs and panels are matched on.
 */
function initTabs({ tabSelector, panelSelector, key }) {
    const tabs = Array.from(document.querySelectorAll(tabSelector));
    const panels = Array.from(document.querySelectorAll(panelSelector));
    if (!tabs.length) return;

    function activate(value, { focusTab = false } = {}) {
        tabs.forEach(tab => {
            const isActive = tab.dataset[key] === value;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            // Roving tabindex: only the selected tab is reachable via Tab.
            tab.tabIndex = isActive ? 0 : -1;
            if (isActive && focusTab) tab.focus();
        });

        panels.forEach(panel => {
            const isActive = panel.dataset[key] === value;
            panel.classList.remove('active');
            if (isActive) {
                // Force reflow so the entrance animation replays on each switch.
                void panel.offsetWidth;
                panel.classList.add('active');
            }
        });
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => activate(tab.dataset[key]));

        tab.addEventListener('keydown', e => {
            const last = tabs.length - 1;
            let next = null;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = i === last ? 0 : i + 1;
            else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = i === 0 ? last : i - 1;
            else if (e.key === 'Home') next = 0;
            else if (e.key === 'End') next = last;
            else return;

            e.preventDefault();
            activate(tabs[next].dataset[key], { focusTab: true });
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initTabs({ tabSelector: '.skills-tab', panelSelector: '.skills-panel', key: 'category' });
    initTabs({ tabSelector: '.exp-tab', panelSelector: '.exp-panel', key: 'company' });
});

// Active section detection on scroll
const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

window.addEventListener('scroll', function() {
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.contact-card').forEach(el => observer.observe(el));
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('Konami code activated! You found the easter egg!\n\nYou must be a developer too. Let\'s connect!');
    }
});
