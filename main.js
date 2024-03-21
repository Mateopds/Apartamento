let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}
