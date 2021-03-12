const swiper = new Swiper('.swiper-container', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--prev',
    prevEl: '.slider-button--next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },



  effect: "coverflow",
  
});