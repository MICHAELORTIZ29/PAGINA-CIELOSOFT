const slideTrack = document.querySelector('.slide-track-client');
const slides = document.querySelectorAll('.slide-client');

function setupCarouselClient() {
    // Elimina los clones existentes
    slideTrack.querySelectorAll('.clone').forEach(clone => clone.remove());

    // Clona los primeros slides y añádelos al final para crear el efecto infinito
    slides.forEach(slide => {
        const cloneSlide = slide.cloneNode(true);
        cloneSlide.classList.add('clone');
        slideTrack.appendChild(cloneSlide);
    });

    // Define el ancho de cada slide
    const slideWidth = slides[0].offsetWidth;

    // Define la posición inicial
    let position = 0;

    // Función para animar el carrusel
    function animateCarouselClient() {
        position -= slideWidth;
        slideTrack.style.transition = 'transform 0.5s ease'; // Agrega una transición suave
        slideTrack.style.transform = `translateX(${position}px)`;

        // Verifica si ha llegado al final del carrusel y reinicia la posición
        if (position <= -slideWidth * slides.length) {
            position = 0;
            setTimeout(() => {
                slideTrack.style.transition = 'none'; // Elimina la transición para que el cambio sea instantáneo
                slideTrack.style.transform = `translateX(${position}px)`;
            }, 500); // Espera 500ms antes de eliminar la transición
        }

        // Repite la animación
        setTimeout(animateCarouselClient, 2000); // Cambia 2000 por el intervalo deseado entre cada desplazamiento
    }

    // Inicia la animación del carrusel
    animateCarouselClient();
}

// Llama a la función setupCarousel() para configurar el carrusel inicialmente
setupCarouselClient();

// Actualiza el carrusel cuando cambia el tamaño de la ventana
window.addEventListener('resize', setupCarousel);
