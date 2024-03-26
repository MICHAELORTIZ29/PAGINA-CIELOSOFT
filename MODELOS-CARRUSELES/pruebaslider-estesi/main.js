document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function goToSlide(index) {
        const slideWidth = sliderContainer.children[0].clientWidth;
        sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    prevArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        goToSlide(currentIndex);
    });

    nextArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % dots.length;
        goToSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            goToSlide(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        goToSlide(currentIndex);
    }, 2000);
});