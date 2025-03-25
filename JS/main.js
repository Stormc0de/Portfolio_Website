// Wait for all HTML to load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // First, we need to create a button element for our hamburger menu
    const mobileMenuButton = document.createElement('button');

    // Add appropriate classes and attributes for accessibility
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.setAttribute('aria-label', 'Toggle navigation menu');

    // Create the three lines of the hamburger icon using spans
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        mobileMenuButton.appendChild(span);
    }

    // Find where to insert our button in the existing HTML
    const header = document.querySelector('header .container');
    const nav = document.querySelector('header nav');

    // Place the button before the navigation
    header.insertBefore(mobileMenuButton, nav);

    // Now add functionality - toggle the menu when clicked
    mobileMenuButton.addEventListener('click', function() {
        // Find the navigaton menu
        const navMenu = nav.querySelector('ul');

        // Toggle 'show' class to display/hide the menu
        navMenu.classList.toggle('show');

        // Toggle 'active' class on button for hamburger animation
        mobileMenuButton.classList.toggle('active');
    });
});