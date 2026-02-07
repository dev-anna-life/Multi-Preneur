// Component templates as JavaScript strings
const NavbarTemplate = `
<header class="fixed top-0 left-0 shadow-md w-full z-50 bg-[#29437f]">
    <div class="w-full px-4 py-3 flex justify-between items-center">
        <!-- Logo -->
        <a href="${window.location.pathname.includes('/pages/') ? '../index.html' : './index.html'}">
            <img src="${window.location.pathname.includes('/pages/') ? '../images/logo.svg' : './images/logo.svg'}" alt="Realtor Harry Logo" class="w-28">
        </a>

        <!-- Hamburger Icon -->
        <button id="hamburger" class="md:hidden text-4xl hover:text-[#8ac249] w-[100px] text-white transition-colors duration-300">
            <i class="fa-solid fa-bars text-white"></i>
        </button>

        <!-- Nav Links (Desktop) -->
        <nav class="hidden md:flex space-x-6 items-center text-[20px]">
            <a href="${window.location.pathname.includes('/pages/') ? '../index.html' : './index.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Home</a>
            <a href="${window.location.pathname.includes('/pages/') ? '../pages/about.html' : './pages/about.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">About</a>

            <!-- Services Dropdown -->
            <div class="group relative">
                <a href="${window.location.pathname.includes('/pages/') ? '../pages/services.html' : './pages/services.html'}" class="text-white hover:text-[#8ac249] flex items-center transition-colors duration-300">
                    Services <span class="ml-1"><i class="fas fa-chevron-down"></i></span>
                </a>
                <div class="absolute left-0 mt-2 bg-white border rounded-md shadow-lg hidden group-hover:block">
                    <a href="${window.location.pathname.includes('/pages/') ? '../pages/properties.html' : './pages/properties.html'}" class="block px-4 py-2 hover:bg-gray-100 text-[#29437f]">Properties</a>
                    <a href="${window.location.pathname.includes('/pages/') ? '../pages/coaching.html' : './pages/coaching.html'}" class="block px-4 py-2 hover:bg-gray-100 text-[#29437f]">Coaching</a>
                    <a href="${window.location.pathname.includes('/pages/') ? '../pages/training.html' : './pages/training.html'}" class="block px-4 py-2 hover:bg-gray-100 text-[#29437f]">Training</a>
                </div>
            </div>

            <a href="${window.location.pathname.includes('/pages/') ? '../pages/work.html' : './pages/work.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Work with Us</a>
            <a href="${window.location.pathname.includes('/pages/') ? '../pages/contact.html' : './pages/contact.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Contact</a>
            <a href="${window.location.pathname.includes('/pages/') ? '../pages/blog.html' : './pages/blog.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Blog</a>
            <a href="${window.location.pathname.includes('/pages/') ? '../pages/dashboard.html' : './pages/dashboard.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Dashboard</a>
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-[#29437f] w-full px-6 pb-4 text-lg shadow-md border-t border-[#8ac249]">
        <a href="${window.location.pathname.includes('/pages/') ? '../index.html' : './index.html'}" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">Home</a>
        <a href="${window.location.pathname.includes('/pages/') ? '../pages/about.html' : './pages/about.html'}" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">About</a>

        <!-- Services with sub-items -->
        <div>
            <button id="services-toggle" class="block py-2 font-semibold w-full text-left text-white flex items-center justify-between">
                Services <i id="chevron-icon" class="fas fa-chevron-down ml-1 transition-transform duration-200"></i>
            </button>
            <div id="services-dropdown" class="hidden pl-4 border-l border-[#8ac249]">
                <a href="${window.location.pathname.includes('/pages/') ? '../pages/properties.html' : './pages/properties.html'}" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">• Properties</a>
                <a href="${window.location.pathname.includes('/pages/') ? '../pages/coaching.html' : './pages/coaching.html'}" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">• Coaching</a>
                <a href="${window.location.pathname.includes('/pages/') ? '../pages/training.html' : './pages/training.html'}" class="block py-2 text-white hover:text-[#8ac249] transition-colors duration-300">• Training</a>
            </div>
        </div>

        <a href="${window.location.pathname.includes('/pages/') ? '../pages/work.html' : './pages/work.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Work with Us</a>
        <a href="${window.location.pathname.includes('/pages/') ? '../pages/contact.html' : './pages/contact.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Contact</a>
        <a href="${window.location.pathname.includes('/pages/') ? '../pages/blog.html' : './pages/blog.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Blog</a>
        <a href="${window.location.pathname.includes('/pages/') ? '../pages/dashboard.html' : './pages/dashboard.html'}" class="text-white hover:text-[#8ac249] transition-colors duration-300">Dashboard</a>
    </div>
</header>`;

const FooterTemplate = `
<footer id="contact" class="bg-[#101828] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row gap-10 flex-1">
            <!-- Logo + Description -->
            <div class="flex-1">
                <div class="flex items-center mb-4">
                    <img src="${window.location.pathname.includes('/pages/') ? '../images/logo.svg' : './images/logo.svg'}" alt="Logo" class="h-12 w-auto mr-2 mb-3">
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
  
  const existingHeader = document.querySelector('header');
  const existingFooter = document.querySelector('footer');
  
  if (existingHeader) {
    existingHeader.remove();
  }
  if (existingFooter) {
    existingFooter.remove();
  }

  const navbarContainer = document.createElement('div');
  navbarContainer.innerHTML = NavbarTemplate;
  document.body.insertBefore(navbarContainer.firstElementChild, document.body.firstChild);

  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = FooterTemplate;
  document.body.appendChild(footerContainer.firstElementChild);

  initializeMobileMenu();
}

function initializeMobileMenu() {
  console.log("Initializing mobile menu...");
  
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const servicesToggle = document.getElementById("services-toggle");
  const servicesDropdown = document.getElementById("services-dropdown");
  const chevronIcon = document.getElementById("chevron-icon");

  if (hamburger && mobileMenu) {
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);
    
    newHamburger.addEventListener("click", () => {
      console.log("Hamburger clicked!");
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (servicesToggle && servicesDropdown && chevronIcon) {
    const newServicesToggle = servicesToggle.cloneNode(true);
    servicesToggle.parentNode.replaceChild(newServicesToggle, servicesToggle);
    
    newServicesToggle.addEventListener("click", () => {
      console.log("Services toggle clicked!");
      servicesDropdown.classList.toggle("hidden");
      chevronIcon.classList.toggle("rotate-180");
    });
  }

  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#hamburger") || e.target.id === "hamburger") {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      console.log("Hamburger clicked via delegation");
      mobileMenu.classList.toggle("hidden");
    }
  }
  
  if (e.target.closest("#services-toggle") || e.target.id === "services-toggle") {
    const servicesDropdown = document.getElementById("services-dropdown");
    const chevronIcon = document.getElementById("chevron-icon");
    if (servicesDropdown && chevronIcon) {
      console.log("Services toggle clicked via delegation");
      servicesDropdown.classList.toggle("hidden");
      chevronIcon.classList.toggle("rotate-180");
    }
  }
});

document.addEventListener("DOMContentLoaded", loadComponents);