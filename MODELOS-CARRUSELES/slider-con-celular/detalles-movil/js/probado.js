$(document).ready(function() {
    // Configurar intervalo para cambiar el carrusel cada 1 segundo
    $('.carousel').carousel({
        interval: 2000
    });

    // Activar cambio de carrusel al hacer clic en los botones de control
    $('.carousel-control-prev, .carousel-control-next').click(function() {
        $('.carousel').carousel('pause'); // Pausar el intervalo para evitar conflictos
    });

    // Detectar cambio manual en dispositivos móviles y reanudar el intervalo
    $('.carousel').on('touchstart', function() {
        $('.carousel').carousel('pause');
    });

    // Reanudar el intervalo cuando se deslice el carrusel en dispositivos móviles
    $('.carousel').on('touchend', function() {
        $('.carousel').carousel('cycle');
    });

    // Forzar la activación del carrusel después de que la página se haya cargado completamente
    $(window).on('load', function() {
        $('.carousel').carousel('cycle');
    });
});
