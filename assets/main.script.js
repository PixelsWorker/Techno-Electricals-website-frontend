document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const serviceIcons = document.querySelectorAll(".service-icon");
    const backToTopButton = document.getElementById("backToTop");
    const preloader = document.getElementById("preloader");
    const heroSection = document.querySelector(".hero");
    const customerLogos = document.querySelectorAll(".customer-logo");
    const carousel = document.getElementById("customerCarousel");

    // Icon mappings for light/dark mode
    const iconMappings = {
        "transformer_light.webp": "transformer_dark.webp",
        "tools_light.webp": "tools_dark.webp",
        "filter_light.webp": "filter_dark.webp"
    };

    function updateIcons() {
        serviceIcons.forEach(icon => {
            const fileName = icon.src.split('/').pop(); // Get file name reliably
            if (body.classList.contains("dark-mode")) {
                if (iconMappings[fileName]) {
                    icon.src = `../images/icon/${iconMappings[fileName]}`;
                }
            } else {
                const lightIcon = Object.keys(iconMappings).find(key => iconMappings[key] === fileName);
                if (lightIcon) {
                    icon.src = `../images/icon/${lightIcon}`;
                }
            }
        });
    }

    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️";
        updateIcons();
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "🌙";
        updateIcons();
    }

    // Apply stored dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") enableDarkMode();

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", () => {
        body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
                if (targetElement) {
                    window.scrollTo({ top: targetElement.offsetTop - 70, behavior: "smooth" });
                }
            }
        });
    });

    // Hide Preloader
    function hidePreloader() {
        if (preloader) {
            preloader.style.opacity = "0"; // Fade out effect
            setTimeout(() => preloader.style.display = "none", 500);
        }
    }
    hidePreloader();

    // Hero Background Slideshow
    const images = [
        "images/BackgroundImg/BackgroundImg_1.webp",
        "images/BackgroundImg/BackgroundImg_2.webp",
        "images/BackgroundImg/BackgroundImg_3.webp"
    ];
    let currentIndex = 0;
    
    function changeBackground() {
        heroSection.style.background = `url('${images[currentIndex]}') no-repeat center center/cover`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000); // Change every 5 seconds

    // Back to Top Button
    window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 200 ? "flex" : "none";
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Valued Customers Carousel
    if (carousel) {
        new bootstrap.Carousel(carousel, { interval: 2000, pause: "hover", wrap: true });
    }

    // Customer Logo Click Handling
    customerLogos.forEach(logo => {
        logo.addEventListener("click", function () {
            const websiteUrl = this.getAttribute("data-url");
            if (websiteUrl) {
                if (confirm(`Do you want to visit ${this.alt}?`)) {
                    window.open(websiteUrl, "_blank"); // Open in a new tab
                }
            }
        });
    });
});
