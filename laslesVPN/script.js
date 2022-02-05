const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 50,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  },
  breakpoints: {
    430: {
      width: 400
    },
  }
});

document.querySelector(".menu-btn").addEventListener("click", () => document.body.classList.toggle("menu-open"));
