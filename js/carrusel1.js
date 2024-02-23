let currentSlide = 0;

  function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Carrusel automático
  setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos