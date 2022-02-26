document.addEventListener("DOMContentLoaded", function () {
  const cb = (target, isIntersecting) => {
    if (isIntersecting) {
      const ta = new TextAnimation(target);
      ta.animate();
    }
  };
  const so = new ScrollObserver(".animate-title", cb);
  // so.destoroy();
});
