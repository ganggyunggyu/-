const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const N = input.shift();

const numArr = input.map((el) => el.split(" ").map(Number));

numArr.sort((a, b) => {
  if (a[0] == b[0]) {
    a = a[1];
    b = b[1];
    return a - b;
  } else {
    a = a[0];
    b = b[0];
    return a - b;
  }
});

console.log(numArr.join("\n").replaceAll(",", " "));
