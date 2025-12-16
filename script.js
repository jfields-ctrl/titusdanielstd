// Array of all your images
const images = [
  'images/0463479f0e85.jpg',
  'images/172a13fc765d.jpg',
  'images/23fc9ff40911.jpg'
];

let currentIndex = 0;
const slide = document.getElementById('slide');

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length; // loop back
  slide.src = images[currentIndex];
}

// Change image every 3 seconds
setInterval(nextSlide, 3000);
