
// const themeToggle = document.getElementById('theme-toggle');
// const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
// const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     themeToggleLightIcon.classList.toggle('hidden');
//     themeToggleDarkIcon.classList.toggle('hidden');
// });


 // Check for the saved theme preference in localStorage
 const savedTheme = localStorage.getItem('theme');
 const body = document.body;
 const themeToggle = document.getElementById('theme-toggle');
 const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
 const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

 // Apply saved theme on page load
 if (savedTheme) {
     body.classList.add(savedTheme);
     if (savedTheme === 'dark-mode') {
         themeToggleLightIcon.classList.remove('hidden');
         themeToggleDarkIcon.classList.add('hidden');
     } else {
         themeToggleLightIcon.classList.add('hidden');
         themeToggleDarkIcon.classList.remove('hidden');
     }
 } else {
     // Default to light mode if no theme is saved
     body.classList.add('light-mode'); // You can also set this as your default mode
     themeToggleLightIcon.classList.add('hidden');
     themeToggleDarkIcon.classList.remove('hidden');
 }

 // Toggle theme on button click and save preference in localStorage
 themeToggle.addEventListener('click', () => {
     const isDarkMode = body.classList.contains('dark-mode');
     
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
 const mobileMenuButton = document.getElementById('mobile-menu-button');

 mobileMenuButton.addEventListener('click', () => {
     // Add your menu opening logic here
     alert("Mobile menu button clicked"); // Just a placeholder for the action
 });