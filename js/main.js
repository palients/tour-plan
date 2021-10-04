const hotelSwiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  speed: 500,

  // Keyboard Control

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  speed: 500,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке menu");
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});
// Подключение яндекс карт API

// ymaps.ready(init);
// function init(){
//   var myMap = new ymaps.Map("map", {
//     center: [7.57, 79.80],
//     zoom: 11,
//     controls: ["zoomControl"],
//     behaviors: ["drag"]
//   });
// }