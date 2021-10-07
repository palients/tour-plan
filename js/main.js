$(document).ready(function () {
  // Подключение маски для телефона
  $(".phone").mask("0000-0000");
  
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

modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

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
    // Обработка форм
    $(".form").each(function() {
      $(this).validate({
      errorClass: "invalid",
      messages: {
    name: {
      required: "Укажите имя",
      minlength: "Имя должно быть не короче 2 букв"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Телефон обязателен"
    }
  }
    });
    })
    AOS.init();
});
  $(document).on("keydown", function(e){
    if(e.which === 27){
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });