const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input.join("");

let result = 0;
let cnt = 0;

while (result != N) {
  cnt++;
  if (cnt.toString().includes("666")) result++;

}

console.log(cnt);

