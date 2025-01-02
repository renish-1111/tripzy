const themeToggle = document.getElementById('theme-toggle');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const body = document.body;

// Function to apply dark mode based on localStorage or default to light mode
const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    // Check if there's a theme stored in localStorage
    if (savedTheme) {
        body.classList.add(savedTheme);

        // Show/hide icons based on the current theme
        if (savedTheme === 'dark-mode') {
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
        }
    } else {
        // Default theme if nothing is saved
        body.classList.add('light-mode');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }
};

// Call applyTheme on page load
applyTheme();

// Toggle theme and update localStorage
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');

    // Toggle theme and save to localStorage
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    }
});

// Mobile menu button (you can implement the actual logic for opening the menu)
// const mobileMenuButton = document.getElementById('mobile-menu-button');

// mobileMenuButton.addEventListener('click', () => {
//     // Add your menu opening logic here
//     alert("Mobile menu button clicked"); // Just a placeholder for the action
// });