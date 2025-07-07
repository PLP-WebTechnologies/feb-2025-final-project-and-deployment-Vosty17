
// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const newsletterForm = document.getElementById('newsletterForm');

// Theme Toggle Functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
    
    // Change icon based on menu state
    if (mainNav.classList.contains('active')) {
        mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

// Newsletter Form Submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    
    // Simple validation
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Save to localStorage
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || []);
    subscriptions.push(email);
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
mobileMenuToggle.addEventListener('click', toggleMobileMenu);
newsletterForm.addEventListener('submit', handleNewsletterSubmit);

// Close mobile menu when clicking on a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Initialize articles with animation
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading articles from an API
    setTimeout(() => {
        const articles = document.querySelectorAll('.article-card');
        articles.forEach(article => {
            article.style.opacity = '1';
        });
    }, 300);
});

// AIoT related functions
function simulateAIoTData() {
    console.log('Simulating AIoT data stream...');
    
    const devices = [
        { id: 'sensor-001', type: 'temperature', value: Math.floor(Math.random() * 30) + 10 },
        { id: 'sensor-002', type: 'humidity', value: Math.floor(Math.random() * 100) },
        { id: 'camera-001', type: 'object-detection', value: ['person', 'vehicle', 'package'][Math.floor(Math.random() * 3)] }
    ];
    
    console.log('Current AIoT Device Status:', devices);
    
    // Update every 5 seconds
    setInterval(() => {
        devices.forEach(device => {
            if (device.type === 'temperature') {
                device.value = Math.floor(Math.random() * 30) + 10;
            } else if (device.type === 'humidity') {
                device.value = Math.floor(Math.random() * 100);
            } else if (device.type === 'object-detection') {
                device.value = ['person', 'vehicle', 'package'][Math.floor(Math.random() * 3)];
            }
        });
        
        console.log('Updated AIoT Device Status:', devices);
    }, 5000);
}

// Start the simulation
simulateAIoTData();
