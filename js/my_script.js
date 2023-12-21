const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");
const carousel = document.querySelector(".carousel-inner");

let index = 0;

prevButton.addEventLister('onclick', () => {
    if (index === 0) return;
    index -= 1;

    carousel.style.transform = translate3d(-${500 * index}px, 0, 0);
});

nextButton.addEventListener('onclick', () => {
    if (index === 2) return;
    index += 1;

    carousel.style.transfrom = translate3d(-${500 * index}px, 0, 0);
});