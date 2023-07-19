const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const [N, M] = input.shift().split(" ");

const cards = input.join(" ").split(" ").map(Number);

let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (i == j) {
      continue;
    }
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const num = M - sum;
      if (num >= 0 && result <= sum) {
        result = sum;
      }
    }
  }
}
console.log(result);
