
// navbar js function
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    
        mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
        });

    function toggleMobileDropdown() {
        mobileDropdown.classList.toggle('hidden')
        }


