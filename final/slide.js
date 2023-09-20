let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();


document.addEventListener("DOMContentLoaded", function () {
    const flipBoxFront = document.querySelector(".flip-box-front video");
  
    // Play the video when the front of the flip box is in view
    flipBoxFront.addEventListener("mouseenter", function () {
      flipBoxFront.play();
    });
  
    // Pause the video when the front of the flip box is out of view
    flipBoxFront.addEventListener("mouseleave", function () {
      flipBoxFront.pause();
      // Reset the video to the beginning when it's paused
      flipBoxFront.currentTime = 0;
    });
  });
  