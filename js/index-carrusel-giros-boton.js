document.addEventListener("DOMContentLoaded", function() {
    const showDetailsBtn = document.querySelector(".show-details-btn");
    const carouselDetails = document.querySelector(".carousel__details");

    if (showDetailsBtn && carouselDetails) {
        showDetailsBtn.addEventListener("click", function() {
            carouselDetails.classList.toggle("show");
            if (carouselDetails.classList.contains("show")) {
                carouselDetails.style.display = "block";
                showDetailsBtn.textContent = "Ocultar detalles";
            } else {
                carouselDetails.style.display = "none";
                showDetailsBtn.textContent = "Mostrar detalles";
            }
        });
    }
});

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

