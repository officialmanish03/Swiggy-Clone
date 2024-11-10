const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', () => {
    slider.scrollBy({
        left: 150, // Adjust the value based on the width of your images and any margins or padding
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () => {
    slider.scrollBy({
        left: -150, // Adjust the value based on the width of your images and any margins or padding
        behavior: 'smooth'
    });
});

const slide = document.querySelector('.slide');
const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');

forwardButton.addEventListener('click',() => {
    slide.scrollBy({
        left:100, 
        behavior:'smooth'
    });
});
backwardButton.addEventListener('click',() => {
    slide.scrollBy({
        left:-100, 
        behavior:'smooth'
    });
});

