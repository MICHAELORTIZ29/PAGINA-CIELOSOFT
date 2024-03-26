document.addEventListener("DOMContentLoaded", function () {
  const carouselControls = document.querySelectorAll(".carousel-control-prev, .carousel-control-next");

  carouselControls.forEach(control => {
      control.addEventListener("click", function () {
          const circle = this.querySelector("::before");
          circle.style.backgroundColor = "blue"; // Cambia el fondo del círculo al azul
      });
  });
});