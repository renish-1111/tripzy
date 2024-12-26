
// Event listeners for tabs
document.getElementById("createTripBtn").addEventListener("click", () => showTab("createTripTab"));
document.getElementById("previousTripsBtn").addEventListener("click", () => showTab("previousTripsTab"));


// navbar js function
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        menuButton.querySelector('svg').classList.toggle('hidden');
    });
});

// Tab navigation
function showTab(tabId) {
    document.querySelectorAll("main > div").forEach((tab) => {
        tab.classList.add("hidden");
    });
    document.getElementById(tabId).classList.remove("hidden");
}
