let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');
const intervalTime = 3000; // Intervalo de tiempo en milisegundos (3 segundos)

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Función para avanzar automáticamente al siguiente slide
function autoSlide() {
  nextSlide();
}

// Iniciar el intervalo para avanzar automáticamente
setInterval(autoSlide, intervalTime);

// BUTTON TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Evita el desplazamiento mientras se toca el botón
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



