const container = document.getElementById('carouselContainer');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showItem(index) {
  items.forEach(item => {
    item.style.display = 'none';
  });
  items[index].style.display = 'flex';
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }
  showItem(currentIndex);
}

// Duplicar elementos
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselContainer = document.querySelector('.carousel-container');

carouselItems.forEach(item => {
  const clone = item.cloneNode(true);
  carouselContainer.appendChild(clone);
});

// Anima el carrusel
setInterval(nextItem, 3000); // Cambia de diapositiva cada 3 segundos
