class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    this.defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.options = Object.assign(this.defaultOptions, options);
    this.once = this.options.once;
    this.cb = cb;
    this._init();
  }
  _init() {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.io.POLL_INTERVAL = 100;
    this.els.forEach((el) => this.io.observe(el));
  }
  destoroy() {
    this.io.disconnect();
  }
}
