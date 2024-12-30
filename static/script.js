
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
    document.body.style.backgroundColor = tabId === "createTripTab" ? "#f0f0f0" :"url('../images/landing-bg.jpg')";
}


// Initialize Chart.js for Statistics
const ctx = document.getElementById('tripzyStatsChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ease of Use', 'Time Saved', 'Cost Efficiency', 'User Satisfaction'],
        datasets: [{
            label: 'Impact Score',
            data: [95, 90, 85, 98],
            backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { title: { display: true, text: 'Metrics' } },
            y: { title: { display: true, text: 'Score (%)' }, min: 0, max: 100 }
        }
    }
});