// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselImages = document.querySelectorAll('.carousel-inner img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const indicators = document.querySelectorAll('.indicator');

let currentImage = 0;

// Function to show next image
function showNextImage() {
  currentImage++;
  if (currentImage >= carouselImages.length) {
    currentImage = 0;
  }
  updateCarousel();
}

// Function to show previous image
function showPrevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = carouselImages.length - 1;
  }
  updateCarousel();
}

// Function to update carousel based on currentImage
function updateCarousel() {
  carouselInner.style.transform = `translateX(${-currentImage * 100}%)`;
  indicators.forEach((indicator, index) => {
    if (index === currentImage) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Event listeners for buttons
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Auto play
setInterval(showNextImage, 5000);

// Indicator click event
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentImage = index;
    updateCarousel();
  });
});
