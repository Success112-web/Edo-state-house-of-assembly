// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // 1. Sticky Header with Scroll Shadow
    const header = document.getElementById("main-header");
    if (header) {
        window.addEventListener("scroll", function() {
            // Toggles the .header-scrolled class based on scroll position
            header.classList.toggle("header-scrolled", window.scrollY > 50);
        });
    }

    // 2. Image Slideshow
    const sliderWrapper = document.querySelector(".slider-wrapper");
    if (sliderWrapper) {
        const slides = document.querySelectorAll(".slide");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        
        let currentIndex = 0;
        const slideCount = slides.length;

        // Function to update the slider position
        function updateSlider() {
            sliderWrapper.style.transform = translateX;
        }

        // Next button event
        nextBtn.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        });

        // Previous button event
        prevBtn.addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlider();
        });
        
        // Optional: Auto-play the slider
        setInterval(() => {
            nextBtn.click();
        }, 5000); // Change slide every 5 seconds
    }

    // 3. Automatically update the copyright year in the footer
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});