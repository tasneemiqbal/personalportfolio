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
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
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
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
});

// Smooth scrolling function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll detection for navigation
window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Rotating quotes
/*const quotes = [
    "Turning bugs into features and chaos into strategy ✨",
    "CS student by day, product thinker by night 🚀",
    "Building platforms that people actually want to use 💡",
    "Where code meets creativity meets collaboration 🎯",
    "Making tech accessible, one explanation at a time 📊",
    "Your friendly neighborhood platform builder 👋"
];

let quoteIndex = 0;

function rotateQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    const quoteElement = document.getElementById('rotatingQuote');
    
    if (quoteElement) {
        // Fade out
        quoteElement.style.animation = 'none';
        
        // Change text and fade in
        setTimeout(() => {
            quoteElement.textContent = quotes[quoteIndex];
            quoteElement.style.animation = 'slide-in 0.5s ease-out';
        }, 50);
    }
}

// Start rotating quotes every 4 seconds
setInterval(rotateQuote, 4000);*/


// Active section detection on scroll
const sections = ['hero', 'about', 'experience', 'contact'];

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
                
                const activeLink = document.querySelector(`.nav-link[onclick*="${sectionId}"]`);
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

// Observe all animated elements on page load
document.addEventListener('DOMContentLoaded', function() {
    // Observe cards and sections
    const animatedElements = document.querySelectorAll(
        '.superpower-card, .fun-fact-item, .contact-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Log that site is loaded (for debugging)
    console.log('✨ Portfolio loaded successfully!');
    console.log('👋 Hi there! Thanks for checking out the code.');
    console.log('📧 Reach out: tasneemiqbal417@gmail.com');
});

// Handle button clicks with smooth animations
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 100);
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'wiggle 0.5s ease';
        alert('🎮 Konami code activated! You found the easter egg! 🎉\n\nYou must be a developer too. Let\'s connect!');
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(function() {
    // Any additional scroll handling can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);
