const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const foodScroll = document.querySelector('.food-scroll');

scrollLeftButton.addEventListener('click', () => {
    foodScroll.scrollBy({
        left: -200, // Adjust this value for desired scroll distance
        behavior: 'smooth',
    });
});

scrollRightButton.addEventListener('click', () => {
    foodScroll.scrollBy({
        left: 200, // Adjust this value for desired scroll distance
        behavior: 'smooth',
    });
});

const backgroundVideo = document.getElementById("background-video");

backgroundVideo.addEventListener("click", function () {
    if (backgroundVideo.paused) {
        backgroundVideo.play();
        backgroundVideo.muted = true;
    } else {
        backgroundVideo.pause();
        backgroundVideo.muted = true;
    }
});
