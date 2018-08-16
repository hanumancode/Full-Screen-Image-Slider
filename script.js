let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0; //represents which image we are on

// reset function clears out all images before every slide move
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

// initializes the slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

// show previous (slide left)

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// create event listener for left arrow click
arrowLeft.addEventListener('click', function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// show next (right slide)
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

// create event listener for right arrow click

startSlide();