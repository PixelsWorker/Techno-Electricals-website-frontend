document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const serviceIcons = document.querySelectorAll(".service-icon");

    // Define light and dark mode images
    const iconMappings = {
        "transformer_light.webp": "transformer_dark.webp",
        "tools_light.webp": "tools_dark.webp",
        "filter_light.webp": "filter_dark.webp"
    };

    function updateIcons() {
        serviceIcons.forEach(icon => {
            const fileName = new URL(icon.src).pathname.split('/').pop(); // Get file name reliably
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
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Hide Preloader
    function hidePreloader() {
        setTimeout(() => {
            document.getElementById('preloader').classList.add('fade-out');
        }, 1000);
    }

    // Hero Background Slideshow
    const heroSection = document.querySelector('.hero');
    const images = [
        "../images/BackgroundImg/BackgroundImg_1.webp",
        "../images/BackgroundImg/BackgroundImg_2.webp",    
        "../images/BackgroundImg/BackgroundImg_3.webp"
    ];
    let currentIndex = 0;

    function changeBackground() {
        heroSection.style.background = `url('${images[currentIndex]}') no-repeat center center/cover`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000); // Change every 5 seconds

    // Scroll to Top Button
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



// Back to Top Button

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function hidePreloader() {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.opacity = "0"; // Fade out effect
            setTimeout(() => {
                preloader.style.display = "none"; // Remove from DOM after fade-out
            }, 500);
        }
    }

    // Call hidePreloader() after page load
    hidePreloader();
});


// Valued Customers Carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("customerCarousel");

    if (carousel) {
        const interval = 2000; // Change slide every 3 seconds
        const bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: interval,
            pause: "hover", // Pause on hover
            wrap: true // Loop slides
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const customerLogos = document.querySelectorAll(".customer-logo");

    customerLogos.forEach(logo => {
        logo.addEventListener("click", function () {
            const websiteUrl = this.getAttribute("data-url");
            if (websiteUrl) {
                const userConfirmed = confirm(`Do you want to visit ${this.alt}?`);
                if (userConfirmed) {
                    window.open(websiteUrl, "_blank"); // Open in a new tab
                }
            }
        });
    });
});
