"use strict";
window.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide'),
        slider = document.querySelector('.header__content'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        slides[slideIndex - 1].style.display = "block";
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function movingDots() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    slider.style.position = "relative";

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = '1';
        }
        indicators.append(dot);
        dots.push(dot);
    }

    movingDots();

    prev.addEventListener('click', function () {
        plusSlide(-1);
        movingDots();
    });

    next.addEventListener('click', function () {
        plusSlide(+1);
        movingDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            movingDots();
            showSlides();
        });
    });
});