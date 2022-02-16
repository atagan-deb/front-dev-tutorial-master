
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = new Swiper(".swiper-container", this._initSwiper());
  }

  _initSwiper() {
    return {
      loop: true,
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true, // 中央揃え
      slidesPerView: 1, // 表示する画像数
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
    };
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop();
  }
}
