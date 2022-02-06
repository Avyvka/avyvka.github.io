const video = document.querySelector(".main-video");
const triangle = document.querySelector(".triangle");
const nav = document.querySelector(".nav");
const author = document.querySelector(".author");

window.addEventListener("scroll", (event) => {
    let value = ((window.pageYOffset - video.offsetTop) / (video.offsetTop + video.offsetHeight));

    value *= 1.3;

    video.style.filter = `grayscale(${value})`;

    triangle.style.clipPath = `polygon(0% 0%, 0% 100%, 100% 100%, 100% ${100-value*100}%)`

    author.style.opacity = 1 - (value*5);

    if (value > 1.0) {
        nav.classList.add("noise");
    }
    else {
        nav.classList.remove("noise");
    }
});