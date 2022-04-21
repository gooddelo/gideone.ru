// Swiper

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
  centeredSlides: true,

  breakpoints: {
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 0,
    // },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 39,
    }
  }
});
