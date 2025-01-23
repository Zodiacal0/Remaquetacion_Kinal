document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');

    let slideIndex = 0;

    const showSlide = (index) => {
        const slides = document.querySelectorAll('.slider img');
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    };

    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 3000);
});