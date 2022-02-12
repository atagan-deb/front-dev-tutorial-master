const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
  let accu = defaultValue;
  for (let i in arry) {
    accu = callback(accu, arry[i]);
  }
  return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
