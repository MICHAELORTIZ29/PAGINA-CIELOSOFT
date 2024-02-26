document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // Si el padre tiene la clase .skewed, establece la variable skewHack.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    // Función para manejar el movimiento del mouse o el dedo.
    function handleMove(event) {
        // Obtener la posición delta entre la posición del mouse o dedo y el punto central.
        if (event.touches) {
            delta = (event.touches[0].clientX - window.innerWidth / 2) * 0.5;
        } else {
            delta = (event.clientX - window.innerWidth / 2) * 0.5;
        }

        // Mover el handle.
        handle.style.left = (event.touches ? event.touches[0].clientX : event.clientX) + delta + 'px';

        // Ajustar el ancho del panel superior.
        topPanel.style.width = (event.touches ? event.touches[0].clientX : event.clientX) + skewHack + delta + 'px';
    }

    // Event listener para el movimiento del mouse.
    parent.addEventListener('mousemove', handleMove);

    // Event listener para el movimiento del dedo en dispositivos táctiles.
    parent.addEventListener('touchmove', function(event) {
        handleMove(event);
        event.preventDefault(); // Evitar el desplazamiento predeterminado en dispositivos táctiles.
    });
});
