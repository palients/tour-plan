$(document).ready(function () {
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

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
var ESCcloseButton = $(".modal__close");

modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);
ESCcloseButton.on("keydown", ESCclose);

  function openModal () {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal (event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
    function ESCclose (event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if (event.key == "Escape") modalOverlay.removeClass("modal__overlay--visible");
    if (event.key == "Escape") modalDialog.removeClass("modal__dialog--visible");
    }
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