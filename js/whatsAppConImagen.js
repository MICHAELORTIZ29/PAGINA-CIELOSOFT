function enviarWhatsApp() {
    // Número de WhatsApp al que se enviará el mensaje (incluyendo el código de país)
    var numero = '984599871'; // Reemplaza con tu número de WhatsApp

    // Mensaje que se enviará
    var mensaje = '¡Hola! Este es un mensaje de prueba desde mi sitio web.';

    // Ruta relativa de la imagen que se enviará
    var imagen = encodeURIComponent('https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/01/16095118/Depositphotos_3667865_m-2015-compressor.jpg'); // Reemplaza con la ruta relativa de tu imagen

    // Generar el enlace de WhatsApp con el mensaje y la imagen
    var link = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje) + '&source=&data=&media=' + imagen;

    // Abrir WhatsApp en una nueva ventana
    window.open(link, '_blank');
}