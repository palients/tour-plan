const swiper = new Swiper(".swiper", {
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
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
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