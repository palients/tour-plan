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