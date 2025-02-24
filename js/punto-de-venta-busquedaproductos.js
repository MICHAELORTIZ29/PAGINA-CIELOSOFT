document.addEventListener("DOMContentLoaded", function () {
    const botonesFiltro = document.querySelectorAll(".filtro-btn");
    const productos = document.querySelectorAll(".producto");
    const contenedor = document.querySelector(".productos-container");

    botonesFiltro.forEach((boton) => {
        boton.addEventListener("click", function () {
            const categoria = this.getAttribute("data-categoria");

            // Quitar 'active' de todos los botones y agregarlo al botón seleccionado
            botonesFiltro.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Limpiar el contenedor antes de agregar los productos filtrados
            contenedor.innerHTML = "";

            productos.forEach((producto) => {
                if (categoria === "todos" || producto.getAttribute("data-categoria") === categoria) {
                    producto.style.display = "block"; // Asegurar que sean visibles
                    producto.style.opacity = "0"; // Iniciar ocultos
                    producto.style.transform = "scale(0.8)"; // Reducidos al inicio
                    
                    contenedor.appendChild(producto); // Se reordenan

                    // Agregar animación de aparición con un pequeño retraso
                    setTimeout(() => {
                        producto.style.opacity = "1";
                        producto.style.transform = "scale(1)";
                        producto.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                    }, 100);
                } else {
                    producto.style.display = "none";
                }
            });
        });
    });
});