document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider();
  hero.start();
  setTimeout(() => {
    hero.stop();
  }, 20000);
});
