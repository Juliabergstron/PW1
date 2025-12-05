
let index = 0;

function moveCarousel(step) {
    const slides = document.querySelectorAll(".carousel img");
    const total = slides.length;

    index += step;

    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    document.querySelector(".carousel").style.transform = 
        `translateX(${-index * 100}%)`;
}

document.querySelector(".prev").onclick = () => moveCarousel(-1);
document.querySelector(".next").onclick = () => moveCarousel(1);

