let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide'); // Select all slides
const totalSlides = slides.length; // Number of slides

// Function to switch to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide after the last
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set up auto-scroll
setInterval(nextSlide, 3000); // Change slide every 3 seconds