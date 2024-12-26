// Tab navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        // Toggle the `hidden` class on the mobile menu
        mobileMenu.classList.toggle('hidden');
    });
});

