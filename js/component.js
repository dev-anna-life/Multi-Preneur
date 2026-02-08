// Component templates as JavaScript strings
const NavbarTemplate = `
<header class="fixed top-0 left-0 shadow-md w-full z-50 bg-[#29437f]">
    <div class="w-full px-4 py-3 flex justify-between items-center">
        <!-- Logo -->
        <a href="${window.location.pathname.includes("/pages/") ? "../index.html" : "./index.html"}">
            <img src="${window.location.pathname.includes("/pages/") ? "../images/logo.svg" : "/Multi-Preneur/images/logo.svg"}" alt="Realtor Harry Logo" class="w-28">
        </a>

        <!-- Hamburger Icon -->
        <button id="hamburger" class="md:hidden text-4xl hover:text-[#8ac249] w-[100px] text-white transition-colors duration-300">
            <i class="fa-solid fa-bars text-white"></i>
        </button>

        <!-- Nav Links (Desktop) -->
        <nav class="hidden md:flex space-x-6 items-center text-[20px]">
            <a href="/Multi-Preneur/index.html" class="text-white hover:text-[#8ac249] transition-colors duration-300">Home</a>
            <a href="/Multi-Preneur/pages/about.html" class="text-white hover:text-[#8ac249] transition-colors duration-300">About</a>

            <!-- Services Dropdown -->
            <div class="group relative">
                <a href="/Multi-Preneur/pages/service.html" class="text-white hover:text-[#8ac249] flex items-center transition-colors duration-300">
                    Services <span class="ml-1"><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="absolute left-0 mt-2 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px]">
                    <a href="/Multi-Preneur/pages/properties.html" class="block px-4 py-2 hover:bg-gray-100 text-[#29437f] transition-colors">Properties</a>
                    <a href="/Multi-Preneur/pages/coaching.html" class="block px-4 py-2 hover:bg-gray-100 text-[#29437f] transition-colors">Coaching</a>
                    <a href="/Multi-Preneur/pages/training.html" class="block px-4 py-2 hover:bg-gray-100 text-[#29437f] transition-colors">Training</a>
                </div>
            </div>

            <a href="/Multi-Preneur/pages/work.html" class="text-white hover:text-[#8ac249] transition-colors duration-300">Work with Us</a>
            <a href="/Multi-Preneur/pages/contact.html" class="text-white hover:text-[#8ac249] transition-colors duration-300">Contact</a>
            <a href="/Multi-Preneur/pages/blog.html" class="text-white hover:text-[#8ac249] transition-colors duration-300">Blog</a>
            <a href="/Multi-Preneur/pages/dashboard.html" class="text-white hover:text-[#8ac249] transition-colors duration-300">Dashboard</a>
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-[#29437f] w-full px-6 pb-4 text-lg shadow-md border-t border-[#8ac249]">
        <a href="/Multi-Preneur/index.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">Home</a>
        <a href="/Multi-Preneur/pages/about.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">About</a>

        <!-- Services with sub-items -->
        <div>
            <div class="flex items-center justify-between">
                <a href="pages\services.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300 flex-1">Services</a>
                <button id="services-toggle" class="py-2 px-3 text-white hover:text-[#8ac249] transition-colors duration-300">
                    <i id="chevron-icon" class="fas fa-chevron-down transition-transform duration-200"></i>
                </button>
            </div>
            <div id="services-dropdown" class="hidden pl-4 border-l border-[#8ac249]">
                <a href="/Multi-Preneur/pages/properties.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">• Properties</a>
                <a href="/Multi-Preneur/pages/coaching.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">• Coaching</a>
                <a href="/Multi-Preneur/pages/training.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">• Training</a>
            </div>
        </div>

        <a href="/Multi-Preneur/pages/work.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">Work with Us</a>
        <a href="/Multi-Preneur/pages/contact.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">Contact</a>
        <a href="/Multi-Preneur/pages/blog.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">Blog</a>
        <a href="/Multi-Preneur/pages/dashboard.html" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">Dashboard</a>
    </div>
</header>`;

const FooterTemplate = `
<footer id="contact" class="bg-[#101828] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row gap-10 flex-1">
            <!-- Logo + Description -->
            <div class="flex-1">
                <div class="flex items-center mb-4">
                    <img src="${window.location.pathname.includes("/pages/") ? "../images/logo.svg" : "./images/logo.svg"}" alt="Logo" class="h-12 w-auto mr-2 mb-3">
                    <span class="text-xl font-bold text-white">Multi-<span class="text-[#8ac249]">Preneur</span></span>
                </div>
                <p class="text-sm leading-relaxed max-w-sm mb-4 text-[18px]">Mr Multi-Preneur is dedicated to understanding your unique needs. With years of sales and mentorship, he's empowered thousands in Nigeria to achieve homeownership confidently.</p>
            </div>

            <div>
                <h3 class="font-semibold text-[1rem] mb-3 text-[20px]">Privacy</h3>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-[#8ac249] text-[18px] transition-colors duration-300">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-[#8ac249] text-[18px] transition-colors duration-300">Cookies Policy</a></li>
                </ul>
            </div>
        </div>

        <!-- Social Media Links -->
        <div>
            <h3 class="font-semibold text-lg mt-3 mb-6">Follow Us</h3>
            <ul class="space-y-3 text-sm">
                <li class="flex items-center space-x-3">
                    <i class="fa-brands fa-facebook text-xl text-[#8ac249]"></i>
                    <a href="https://www.facebook.com/share/1UYjZ9qPWV/" class="hover:text-[#8ac249] text-[18px] transition-colors duration-300">Facebook</a>
                </li>
                <li class="flex items-center space-x-3">
                    <i class="fa-brands fa-square-instagram text-xl text-[#8ac249]"></i>
                    <a href="https://www.instagram.com/eponixproperties?" class="hover:text-[#8ac249] text-[18px] transition-colors duration-300">Instagram</a>
                </li>
                <li class="flex items-center space-x-3">
                    <i class="fa-brands fa-x-twitter text-xl text-[#8ac249]"></i>
                    <a href="#" class="hover:text-[#8ac249] text-[20px] transition-colors duration-300">Twitter</a>
                </li>
                <li class="flex items-center space-x-3">
                    <i class="fa-brands fa-linkedin text-xl text-[#8ac249]"></i>
                    <a href="#" class="hover:text-[#8ac249] text-[20px] transition-colors duration-300">LinkedIn</a>
                </li>
                <li class="flex items-center space-x-3">
                    <i class="fa-brands fa-youtube text-xl text-[#8ac249]"></i>
                    <a href="#" class="hover:text-[#8ac249] text-[20px] transition-colors duration-300">YouTube</a>
                </li>
            </ul>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-6 text-center text-sm text-white">
            <p class="text-[18px]">
                &copy; 2025 <span class="font-medium">Multi-Preneur</span>.
                Designed by <span class="text-white font-semibold">Dev Anna <i class="fa-solid fa-heart text-[#8ac249]"></i>. All Rights Reserved.</span>
            </p>
        </div>
    </div>
</footer>`;

function loadComponents() {
  console.log("Loading components...");

  const existingHeader = document.querySelector("header");
  const existingFooter = document.querySelector("footer");

  if (existingHeader) {
    existingHeader.remove();
  }
  if (existingFooter) {
    existingFooter.remove();
  }

  // Create and insert navbar at the top of body
  const navbarContainer = document.createElement("div");
  navbarContainer.innerHTML = NavbarTemplate;
  document.body.insertBefore(
    navbarContainer.firstElementChild,
    document.body.firstChild,
  );

  // Create and insert footer at the end of body
  const footerContainer = document.createElement("div");
  footerContainer.innerHTML = FooterTemplate;
  document.body.appendChild(footerContainer.firstElementChild);

  // Initialize mobile menu functionality
  initializeMobileMenu();
}

function initializeMobileMenu() {
  console.log("Initializing mobile menu...");

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const servicesToggle = document.getElementById("services-toggle");
  const servicesDropdown = document.getElementById("services-dropdown");
  const chevronIcon = document.getElementById("chevron-icon");

  console.log("Elements found:", {
    hamburger,
    mobileMenu,
    servicesToggle,
    servicesDropdown,
    chevronIcon,
  });

  // Mobile hamburger menu
  if (hamburger && mobileMenu) {
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);

    newHamburger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Hamburger clicked!");
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Services dropdown toggle (ONLY the button, not the link)
  if (servicesToggle && servicesDropdown) {
    const newServicesToggle = servicesToggle.cloneNode(true);
    servicesToggle.parentNode.replaceChild(newServicesToggle, servicesToggle);

    const newChevronIcon = document.getElementById("chevron-icon");

    newServicesToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("Services dropdown toggle clicked!");
      servicesDropdown.classList.toggle("hidden");

      if (newChevronIcon) {
        newChevronIcon.classList.toggle("rotate-180");
      }
    });
  }

  // Close mobile menu when clicking on links
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Don't close if clicking the "Services" parent link
        if (!link.textContent.trim().startsWith("Services")) {
          mobileMenu.classList.add("hidden");
        }
      });
    });
  }
}

// Event delegation as backup
document.addEventListener("click", (e) => {
  // Hamburger menu toggle
  if (e.target.closest("#hamburger")) {
    e.preventDefault();
    e.stopPropagation();
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      console.log("Hamburger clicked via delegation");
      mobileMenu.classList.toggle("hidden");
    }
  }

  // Services toggle button ONLY (not the link)
  if (e.target.closest("#services-toggle")) {
    e.preventDefault();
    e.stopPropagation();
    const servicesDropdown = document.getElementById("services-dropdown");
    const chevronIcon = document.getElementById("chevron-icon");
    if (servicesDropdown) {
      console.log("Services toggle clicked via delegation");
      servicesDropdown.classList.toggle("hidden");
      if (chevronIcon) {
        chevronIcon.classList.toggle("rotate-180");
      }
    }
  }

  // Close mobile menu when clicking dropdown links (but not Services main link)
  if (e.target.matches("#services-dropdown a")) {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  }
});

document.addEventListener("DOMContentLoaded", loadComponents);
