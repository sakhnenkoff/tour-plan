$(document).ready(function () {
  const hotelSwiper = new Swiper('.hotel-swiper-container', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  effect: "coverflow",
  
});


const reviewSwiper = new Swiper('.reviews-slider', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  
  
});

var menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", function() {
  console.log("Click on menu button");
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom--visible");
  document
  .querySelector("body")
  .classList.toggle("overflow-settings");
});


var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
var closeModalSpace = $(".modal__overlay");

modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
closeModalSpace.on('click', closeModal);

function openModal() {
   var targetModal = $(this).attr("data-href");
   var modalOverlay = $(".modal__overlay");
   var modalDialog = $(".modal__dialog");
   $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
   $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
   $('body').css('overflow','hidden');
}

function closeModal(event) {
   $('body').css('overflow','auto');
   if (event.key === "Escape" || event.type === 'click'){
   event.preventDefault();
   var modalOverlay = $(".modal__overlay");
   var modalDialog = $(".modal__dialog");
   modalOverlay.removeClass("modal__overlay--visible");
   modalDialog.removeClass("modal__dialog--visible");
}
event.preventDefault();
}
$(".form").each(function() {

  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlenght: "Name must be at least 2 charactes long",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email must look like that name@domain.com",
    },
    phone:{
      required : "Phone number is required",
    },
  },
});
})

  AOS.init();

  $('.num').each(function(){
  $(this).mask('+7(999) 999-99-99');
 
  });
});