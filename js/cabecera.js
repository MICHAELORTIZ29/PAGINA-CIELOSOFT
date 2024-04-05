$(window).scroll(function() {
    if ($(this).scrollTop() > 50) { // Cambiar 50 según sea necesario
        $('#main-header').addClass('fixed-top-header');
    } else {
        $('#main-header').removeClass('fixed-top-header');
    }
});