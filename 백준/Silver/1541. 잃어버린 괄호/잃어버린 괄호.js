const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = input.split('-');

const result = [];

arr.forEach((el) => {
  if (el.includes('+')) {
    let total = 0;
    el = el.split('+').map(Number);
    el.forEach((el2) => (total += el2));
    result.push(total);
  } else {
    result.push(+el);
  }
});

console.log(result.reduce((prev, cur) => prev - cur));