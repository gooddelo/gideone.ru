// Swiper

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 0,
    // },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 39,
    }
  }
});
