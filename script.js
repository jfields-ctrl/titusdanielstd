// Array of image paths
const images = [
  'images/5ae60826d132.jpg', // first image
  'images/2df571c30279.jpg', // second image
  'images/b9173b7b3fe9.jpg' // third image
];

let currentIndex = 0;
const slide = document.getElementById('slide');

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
}

// Change image every 3 seconds
setInterval(nextSlide, 3000);


