


document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.querySelector(".btn-1");
    const btn2 = document.querySelector(".btn-2");
    const btn3 = document.querySelector(".btn-3");
    const btn4 = document.querySelector(".btn-4");
    const btn5 = document.querySelector(".btn-5");
    const btn6 = document.querySelector(".btn-6");
    const btn7 = document.querySelector(".btn-7");
    const btn8 = document.querySelector(".btn-8");
    const btn9 = document.querySelector(".btn-9");
    const btn10 = document.querySelector(".btn-10");
    const btn11 = document.querySelector(".btn-11");
    const btn12 = document.querySelector(".btn-12");

    btn1.addEventListener("click", function() {
        toggleDetails(".details-1", btn1);
    });

    btn2.addEventListener("click", function() {
        toggleDetails(".details-2", btn2);
    });
    btn3.addEventListener("click", function() {
        toggleDetails(".details-3", btn3);
    });
    btn4.addEventListener("click", function() {
        toggleDetails(".details-4", btn4);
    });
    btn5.addEventListener("click", function() {
        toggleDetails(".details-5", btn5);
    });
    btn6.addEventListener("click", function() {
        toggleDetails(".details-6", btn6);
    });
    btn7.addEventListener("click", function() {
        toggleDetails(".details-7", btn7);
    });
    btn8.addEventListener("click", function() {
        toggleDetails(".details-8", btn8);
    });
    btn9.addEventListener("click", function() {
        toggleDetails(".details-9", btn9);
    });
    btn10.addEventListener("click", function() {
        toggleDetails(".details-10", btn10);
    });
    btn11.addEventListener("click", function() {
        toggleDetails(".details-11", btn11);
    });
    btn12.addEventListener("click", function() {
        toggleDetails(".details-12", btn12);
    });



    function toggleDetails(detailsSelector, button) {
        const carouselDetails = document.querySelector(detailsSelector);
        if (carouselDetails) {
            carouselDetails.classList.toggle("show");
            if (carouselDetails.classList.contains("show")) {
                carouselDetails.style.display = "block";
                button.textContent = "Ocultar detalles";
            } else {
                carouselDetails.style.display = "none";
                button.textContent = "Mostrar detalles";
            }
        }
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

