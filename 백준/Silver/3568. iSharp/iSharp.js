const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const datas = input.join("").replaceAll(",", "").replaceAll(";", "").split(" ");
const result = [];

const vari = datas.shift();

const reg = /[a-zA-Z]/;

const divide = (data) => {
  let alph = [];
  let schar = [];
  for (const el of data) {
    if (reg.test(el)) {
      alph.push(el);
    } else if (el === "[") {
      schar.push("]");
    } else if (el === "]") {
      schar.push("[");
    } else if (!reg.test(el)) {
      schar.push(el);
    }
  }
  return `${vari}${schar.reverse().join("")} ${alph.join("")};`;
};

for (let i = 0; i < datas.length; i++) {
  let str = divide(datas[i]);
  result.push(str);
}

console.log(result.join("\n"));
