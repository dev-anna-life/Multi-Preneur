const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobile-overlay')

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    mobileOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    mobileOverlay.classList.add('hidden');
}

if (menuBtn) {
    menuBtn.addEventListener('click', openSidebar);
}

if (closeSidebar) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeSidebar);
}

const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
    darkToggle.addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            this.innerHTML = '<i class="fas fa-moon text-sm md:text-base"></i><span class="hidden md:inline ml-2">Dark Mode</span>';
            localStorage.setItem('darkMode', 'false');
        } else {
            document.documentElement.classList.add('dark');
            this.innerHTML = '<i class="fas fa-sun text-sm md:text-base"></i><span class="hidden md:inline ml-2">Light Mode</span>';
            localStorage.setItem('darkMode', 'true');
        }
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        darkToggle.innerHTML = '<i class="fas fa-sun text-sm md:text-base"></i><span class="hidden md:inline ml-2">Light Mode</span>';
    }
}

// Charts initialization
document.addEventListener('DOMContentLoaded', function() {
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        const revenueChart = new Chart(revenueCtx, {
            type: 'line', 
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue (₦)',
                    data: [45000000, 45000000, 48000000, 61000000, 61000000, 75000000, 85200000],
                    borderColor: '#8ac249',
                    backgroundColor: 'rgba(138, 194, 73, 0.1)',
                    borderWidth: 2, 
                    fill: true,
                    tension:0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true, 
                        ticks: {
                            callback: function(value) {
                                return '₦' + (value / 1000000) + 'M'
                            }
                        }

                    }
                }
            }
        });
    }

    // Property Status Chart
    const propertyCtx = document.getElementById('propertyChart');
    if (propertyCtx) {
        const propertyChart = new Chart(propertyCtx, {
            type: 'doughnut',
            data: {
                labels: ['Available', 'Sold', 'Pending', 'Rented'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: [
                        '#8ac249',
                        '#29437f',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        posiition: 'bottom'
                    }
                }
            }
        });
    }
});

document.documentElement.style.scrollBehavior = 'smooth';
document.body.style.scrollBehavior = 'smooth';

const scrollableElements = document.querySelectorAll('*');
scrollableElements.forEach(el => {
    el.style.scrollBehavior = 'smooth';
})