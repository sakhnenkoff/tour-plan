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