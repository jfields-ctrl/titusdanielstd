// Array of image paths
const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg'
];

let currentIndex = 0;
const slide = document.getElementById('slide');

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
}

// Change image every 3 seconds
setInterval(nextSlide, 3000);
