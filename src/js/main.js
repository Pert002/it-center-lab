window.onload = function() {
    const myCarouselElement = document.querySelector('.carousel')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: true,
        ride: true
    })

    carousel.cycle();
}