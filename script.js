// Select the toggle button and navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Add click event to toggle menu visibility
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});