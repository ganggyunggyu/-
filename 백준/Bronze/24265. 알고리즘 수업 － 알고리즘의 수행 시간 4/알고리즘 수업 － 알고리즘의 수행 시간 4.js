const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const n = +input.join("");
console.log((n * (n - 1)) / 2);
console.log(2);