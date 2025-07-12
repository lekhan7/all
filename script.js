const slide = document.querySelector('.carousel-slide');
const totalImages = slide.children.length;
let currentIndex = 0;

function showImage(index) {
  slide.style.transform = `translateX(-${index * 600}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});
