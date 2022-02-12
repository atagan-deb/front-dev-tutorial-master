const child = document.querySelector(".child");
const cb = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};
const options = {
  root: null, // defaultではwindowとの交差が判定されるが、親要素や先祖要素を指定できる
  rootMargin: "150px 0px", // defaultではviewPort全体が入外判定になるが、marginをつけることで領域を調整できる
  threshold: [1], // targetを0-1で分割し、設定したviewPortへの境界値を定める
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
