let slideIndex = 0;
let slideshowInterval; // Variable to store the interval ID

// Function to show slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Increment slide index, reset if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to manually change slides (next/prev)
function plusSlides(n) {
    stopSlideshow(); // Stop automatic slideshow when manual navigation occurs
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showManualSlide(slideIndex);
    startSlideshow(); // Restart automatic slideshow after a short delay
}

// Function to show a specific slide when dot is clicked
function currentSlide(n) {
    stopSlideshow(); // Stop automatic slideshow when dot is clicked
    slideIndex = n;
    showManualSlide(slideIndex);
    startSlideshow(); // Restart automatic slideshow after a short delay
}

// Helper function to display a specific slide (used by plusSlides and currentSlide)
function showManualSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        n = 1
    }
    if (n < 1) {
        n = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}

// Function to start the automatic slideshow
function startSlideshow() {
    // Clear any existing interval to prevent multiple intervals running
    stopSlideshow();
    // Set a new interval for the automatic slideshow
    slideshowInterval = setInterval(showSlides, 4000); // Change image every 4 seconds
}

// Function to stop the automatic slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Initial call to show the first slide and start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showManualSlide(1); // Show the first slide initially
    startSlideshow(); // Start the automatic slideshow
});