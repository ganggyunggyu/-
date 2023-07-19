const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const n = BigInt(input);
const result = (n * (n - 1n) * (n - 2n)) / (3n * 2n);

console.log(`${result}`);
console.log(3);
