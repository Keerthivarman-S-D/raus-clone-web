function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Slideshow
const slide1Images = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=400&fit=crop'
];

const slide2Images = [
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
];

const heroImages = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop'
];

let currentIndex = 0;

function rotateImages() {
    currentIndex = (currentIndex + 1) % slide1Images.length;
    
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const heroMain = document.getElementById('heroMain');
    
    if (slide1) {
        slide1.style.opacity = '0';
        setTimeout(() => {
            slide1.src = slide1Images[currentIndex];
            slide1.style.opacity = '1';
        }, 500);
    }
    
    if (slide2) {
        slide2.style.opacity = '0';
        setTimeout(() => {
            slide2.src = slide2Images[currentIndex];
            slide2.style.opacity = '1';
        }, 500);
    }
    
    if (heroMain) {
        heroMain.style.opacity = '0.8';
        setTimeout(() => {
            heroMain.src = heroImages[currentIndex];
            heroMain.style.opacity = '1';
        }, 500);
    }
}

// Smooth fade transition
const images = document.querySelectorAll('.slideshow-item img, .hero-main img');
images.forEach(img => {
    img.style.transition = 'opacity 0.5s ease-in-out';
});

// Rotate images every 5 seconds
setInterval(rotateImages, 5000);

// Navigation active link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
