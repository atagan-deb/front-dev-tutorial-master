document.addEventListener("DOMContentLoaded", function () {
  //   const el = document.querySelector(".animate-title");
  //   const el2 = document.querySelector(".animate-title-2");
  //   const str = el.innerHTML.trim().split("");
  //   const str2 = el2.innerHTML.trim().split("");

  // let concatStr = '';

  // for(let c of str) {
  //     c = c.replace(/\s+/, '&nbsp;');
  //     concatStr += `<span class="char">${c}</span>`;
  // }

  //   el.innerHTML = str.reduce((acc, curr) => {
  //     curr = curr.replace(/\s+/, "&nbsp;");
  //     return `${acc}<span class="char">${curr}</span>`;
  //   }, "");
  //   el2.innerHTML = str2.reduce((acc, curr) => {
  //     curr = curr.replace(/\s+/, "&nbsp;");
  //     return `${acc}<span class="char">${curr}</span>`;
  //   }, "");
  const btn = document.querySelector(".toggle");
  const ta1 = new TextAnimation(".animate-title");
  const ta2 = new TextAnimation(".animate-title-2");
  setTimeout(() => {
    ta1.animate();
    ta2.animate();
  }, 1000);
  btn.addEventListener("click", ta1.animate.bind(ta1));
  btn.addEventListener("click", ta2.animate.bind(ta2));
});

class TextAnimation {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, cur) => {
      cur = cur.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${cur}</span>`;
    });
  }
  animate() {
    this.el.classList.toggle("inview");
  }
}

// const ta = new TextAnimation(".animate-title");
