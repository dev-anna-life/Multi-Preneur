// Initialize mobile menu functionality (this should be in your main script.js)
function initializeMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const servicesToggle = document.getElementById("services-toggle");
    const servicesDropdown = document.getElementById("services-dropdown");
    const chevronIcon = document.getElementById("chevron-icon");

    console.log("Initializing mobile menu...", { hamburger, mobileMenu, servicesToggle });

    // Toggle mobile menu
    if (hamburger && mobileMenu) {
        // Remove any existing event listeners to prevent duplicates
        hamburger.replaceWith(hamburger.cloneNode(true));
        const newHamburger = document.getElementById("hamburger");
        
        newHamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            console.log("Mobile menu toggled");
        });
    }

    // Toggle mobile services submenu
    if (servicesToggle && servicesDropdown && chevronIcon) {
        servicesToggle.replaceWith(servicesToggle.cloneNode(true));
        const newServicesToggle = document.getElementById("services-toggle");
        
        newServicesToggle.addEventListener("click", () => {
            servicesDropdown.classList.toggle("hidden");
            chevronIcon.classList.toggle("rotate-180");
        });
    }

    // Close mobile menu when clicking on links
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }
}

// Event delegation as fallback (works even if elements are added later)
document.addEventListener("click", (e) => {
    // Hamburger menu toggle
    if (e.target.closest("#hamburger") || e.target.id === "hamburger") {
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
            console.log("Mobile menu toggled via delegation");
        }
    }
    
    // Services dropdown toggle
    if (e.target.closest("#services-toggle") || e.target.id === "services-toggle") {
        const servicesDropdown = document.getElementById("services-dropdown");
        const chevronIcon = document.getElementById("chevron-icon");
        if (servicesDropdown && chevronIcon) {
            servicesDropdown.classList.toggle("hidden");
            chevronIcon.classList.toggle("rotate-180");
        }
    }
    
    // Close menu when clicking on mobile links
    if (e.target.closest("#mobile-menu a")) {
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.add("hidden");
        }
    }
});

// Your existing code continues here...
document.addEventListener("DOMContentLoaded", () => {
    function initPropertyHoverEffects() {
        const propertyImages = document.querySelectorAll('[id^="property-"]');
        
        const hoverPairs = [
            { hover: "property-1", affect: "property-2" },
            { hover: "property-2", affect: "property-3" },
            { hover: "property-3", affect: "property-4" },
            { hover: "property-4", affect: "property-5" },
            { hover: "property-5", affect: "property-6" },
            { hover: "property-6", affect: "property-1" },
        ];
        
        hoverPairs.forEach((pair) => {
            const hoverImg = document.getElementById(pair.hover);
            const affectedImg = document.getElementById(pair.affect);
            
            if (hoverImg && affectedImg) {
                hoverImg.addEventListener("mouseenter", () => {
                    affectedImg.style.transform = "translateX(-15px)";
                    affectedImg.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
                    affectedImg.style.transition = "all 0.4s ease";
                    
                    const hoverCard = hoverImg.closest("div");
                    const hoverTitle = hoverCard.querySelector("h3");
                    const hoverLocation = hoverCard.querySelector("p");
                    
                    if (hoverTitle) {
                        hoverTitle.style.color = "#8ac249";
                        hoverTitle.style.transition = "color 0.3s ease";
                    }
                    
                    if (hoverLocation) {
                        hoverLocation.style.color = "#8ac249";
                        hoverLocation.style.transition = "color 0.3s ease";
                    }
                });
                
                hoverImg.addEventListener("mouseleave", () => {
                    affectedImg.style.transform = "translateX(0)";
                    affectedImg.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                    affectedImg.style.transition = "all 0.4s ease";
                    
                    const hoverCard = hoverImg.closest("div");
                    const hoverTitle = hoverCard.querySelector("h3");
                    const hoverLocation = hoverCard.querySelector("p");
                    
                    if (hoverTitle) {
                        hoverTitle.style.color = "#29437f";
                        hoverTitle.style.transition = "color 0.3s ease";
                    }
                    
                    if (hoverLocation) {
                        hoverLocation.style.color = "#29437f";
                        hoverLocation.style.transition = "color 0.3s ease";
                    }
                });
            }
        });
    }
    
    function initUnlockPotentialHoverEffects() {
        const unlockCards = document.querySelectorAll(".bg-\\[\\#29437f\\].rounded-xl");
        
        unlockCards.forEach((card) => {
            const h3Title = card.querySelector("h3");
            
            if (h3Title) {
                card.addEventListener("mouseenter", () => {
                    h3Title.style.color = "#8ac249";
                    h3Title.style.transition = "color 0.3s ease";
                });
                
                card.addEventListener("mouseleave", () => {
                    h3Title.style.color = "white";
                    h3Title.style.transition = "color 0.3s ease";
                });
            }
        });
    }
    
    // Initialize effects
    initPropertyHoverEffects();
    initUnlockPotentialHoverEffects();
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-8");
                entry.target.classList.add("opacity-100", "translate-y-0");
                
                if (entry.target.parentElement && entry.target.parentElement.classList.contains("grid")) {
                    const gridItems = entry.target.parentElement.querySelectorAll(".opacity-0");
                    gridItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.remove("opacity-0", "translate-y-8");
                            item.classList.add("opacity-100", "translate-y-0");
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(".opacity-0.translate-y-8");
    animatedElements.forEach((el) => observer.observe(el));
    
    // Stats counter animation
    const statsSection = document.querySelector(".bg-\\[\\#29437f\\]");
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll(".text-3xl");
                    statNumbers.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.transform = "scale(1.1)";
                            setTimeout(() => {
                                stat.style.transform = "scale(1)";
                            }, 200);
                        }, index * 200);
                    });
                }
            });
        },
        { threshold: 0.5 },
    );
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Your existing property data fetching code
const propertyGrid = document.getElementById("propertyGrid");
const URL = "./index.json";

async function fetchData() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.error("Failed to fetch data");
            return;
        }
        const data = await response.json();
        displayUi(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

if (propertyGrid) {
    fetchData();
}

const propertyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            propertyObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

function displayUi(data) {
    if (!propertyGrid) return;
    
    data?.properties.forEach((property) => {
        const div = document.createElement('div');
        div.className = "translate-y-8 transition-all duration-1000 ease-out opacity-0 hover:-translate-y-4";
        div.innerHTML = `
            <img src="${property.image || "/images/Millennium-Gardens-Ibusa-1.png"}" alt="${property.name || "Property"}" class="w-[400px] h-[400px] object-cover rounded-lg shadow-lg transition-all duration-300 cursor-pointer">
            <h3 class="mt-4 text-lg font-bold text-[#29437f] mb-4">${property.name || "Unknown Property"}</h3>
            <p class="text-[#29437f] font-semibold">${property.location || "Unknown Location"}</p>
        `;

        propertyGrid.appendChild(div);
        propertyObserver.observe(div);
    });
}