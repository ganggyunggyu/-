const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const N = +input.join("");
let result = 0;
for (let i = 1; i <= N; i++) {
  let sum = 0;
  let num = i;
  let str = i.toString();
  let numArr = str.split("").map((el) => +el);
  numArr.forEach((el) => {
    sum = sum + el;
  });
  if (num + sum == N) {
    result = numArr.join("");
    break;
  }
}
console.log(result);
