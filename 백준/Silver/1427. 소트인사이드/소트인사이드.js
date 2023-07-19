const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

console.log(
  input
    .join("")
    .split("")
    .sort((a, b) => {
      return b - a;
    })
    .map(Number)
    .join("")
);
