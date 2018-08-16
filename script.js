let sliderImages = document.querySelectorAll(.slide);
let arrowLeft = document.querySelector(#left - arrow);
let arrowRight = document.querySelector(#right - arrow);
let current = 0; //represents which image we are on

// reset function clears out all images before every slide move
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}