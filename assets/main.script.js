document.addEventListener("DOMContentLoaded", function () {
    // Cache DOM elements
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const serviceIcons = document.querySelectorAll(".service-icon");
    const backToTopButton = document.getElementById("backToTop");
    const preloader = document.getElementById("preloader");
    const heroSection = document.querySelector(".hero"); // Make sure your hero element exists (e.g. <header class="hero">)
    const customerLogos = document.querySelectorAll(".customer-logo");
    const carousel = document.getElementById("customerCarousel");
  
    // Icon mappings for dark mode
    const iconMappings = {
      "transformer_light.webp": "transformer_dark.webp",
      "tools_light.webp": "tools_dark.webp",
      "filter_light.webp": "filter_dark.webp"
    };
  
    // Update icons based on dark mode status
    function updateIcons() {
      serviceIcons.forEach(icon => {
        const fileName = icon.src.split('/').pop();
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
  
    // Enable dark mode
    function enableDarkMode() {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
      if (darkModeToggle) darkModeToggle.textContent = "☀️";
      updateIcons();
    }
  
    // Disable dark mode
    function disableDarkMode() {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
      if (darkModeToggle) darkModeToggle.textContent = "🌙";
      updateIcons();
    }
  
    // Check and apply dark mode setting from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
      enableDarkMode();
    }
    if (darkModeToggle) {
      darkModeToggle.addEventListener("click", () => {
        body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
      });
    }
  
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.getElementById(href.substring(1));
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: "smooth"
            });
          }
        }
      });
    });
  
    // Hide preloader
    function hidePreloader() {
      if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 500);
      }
    }
    hidePreloader();
  
    // Background image slider for hero section
    const images = [
      "images/BackgroundImg/BackgroundImg_1.webp",
      "images/BackgroundImg/BackgroundImg_2.webp",
      "images/BackgroundImg/BackgroundImg_3.webp"
    ];
    let currentIndex = 0;
    function changeBackground() {
      if (heroSection) {
        heroSection.style.background = `url('${images[currentIndex]}') no-repeat center center/cover`;
        currentIndex = (currentIndex + 1) % images.length;
      }
    }
    changeBackground();
    setInterval(changeBackground, 5000);
  
    // Back-to-top button functionality
    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 200 ? "flex" : "none";
      });
      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Initialize Bootstrap carousel if available
    if (carousel) {
      new bootstrap.Carousel(carousel, {
        interval: 2000,
        pause: "hover",
        wrap: true
      });
    }
  
    // Add click event to customer logos
    customerLogos.forEach(logo => {
      logo.addEventListener("click", function () {
        const websiteUrl = this.getAttribute("data-url");
        if (websiteUrl && confirm(`Do you want to visit ${this.alt}?`)) {
          window.open(websiteUrl, "_blank");
        }
      });
    });
  });
  