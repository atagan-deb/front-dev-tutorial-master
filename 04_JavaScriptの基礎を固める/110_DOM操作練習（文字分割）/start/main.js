document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split("");
  el.innerHTML = str.reduce((acc, cur) => {
    cur = cur.replace(/\s+/, "&nbsp;");
    return acc + `<span class="char">${cur}</span>`;
  }, "");

  // let concatStr = "";
  // for (let c of str) {
  //   c = c.replace(' ', '&nbsp;')
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  // el.innerHTML = concatStr;
});
