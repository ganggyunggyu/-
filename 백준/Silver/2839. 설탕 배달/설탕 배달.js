const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = +input.join("");

let cnt = 0;

while (n !== 0) {
  if (n % 5 === 0) {
    cnt = cnt + n / 5;
    break;
  } else if (n < 0) {
    cnt = -1;
    break;
  } else {
    n = n - 3;
    cnt++;
  }
}
console.log(cnt);