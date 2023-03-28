window.onload = function(){
    let carouselControlNext = document.getElementById('carousel-control-next');
    let carouselControlPrev = document.getElementById('carousel-control-prev');
    let slides = document.getElementsByClassName('carousel-item'),
        addActiveSlide = function(slide) {slide.classList.add('active')},
        removeActiveSlide = function(slide) {slide.classList.remove('active')};
    let carouselButtons = document.getElementsByClassName('carousel-button'),
        addActiveButton = function(carouselButton) {carouselButton.classList.add('active')},
        removeActiveButton = function(carouselButton) {carouselButton.classList.remove('active')};
    addActiveSlide(slides[0]);
    addActiveButton(carouselButtons[0]);
    
    setInterval(function carouselInterval(){
        // carouselControlNext.onclick = function() {
        //     setTimeout(carouselInterval(), 100000);
        // };
        // carouselControlNext.addEventListener("click", ... => sleep(20000) );
    for (let i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
            addActiveSlide(slides[0]);
            addActiveButton(carouselButtons[0]);
            setTimeout(removeActiveSlide, 350, slides[i]);
            setTimeout(removeActiveButton, 100, carouselButtons[i]);
            break;
        }
        if (slides[i].classList.contains('active')) { 
            slides[i].removeAttribute('style');
            carouselButtons[i].removeAttribute('style');
            setTimeout(removeActiveSlide, 350, slides[i]);
            setTimeout(removeActiveButton, 100, carouselButtons[i]);
            addActiveSlide(slides[i + 1]);
            addActiveSlide(carouselButtons[i + 1]);
            break;
        }
      } 
    }, 4000);
}
    