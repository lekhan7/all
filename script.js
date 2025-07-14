const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
let currentIndex = 0;

function updateSlidePosition() {
  const width = document.querySelector('.carousel-container').offsetWidth;
  slide.style.transform = `translateX(-${currentIndex * width}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  updateSlidePosition();
});

window.addEventListener('resize', updateSlidePosition);
window.addEventListener('load', updateSlidePosition);
