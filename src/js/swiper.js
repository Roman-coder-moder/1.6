import Swiper, { Pagination } from 'swiper';
Swiper.use([ Pagination]);


function resizeScreenChecker() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    var swiper1 = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiper2 = new Swiper('.swiper-container-d', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiper3 = new Swiper('.swiper-container-p', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

window.addEventListener('load',function () {
  resizeScreenChecker();
});

