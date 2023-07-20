const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = input.shift();
const examinees = input.shift().split(" ").map(Number);
const [A, B] = input.shift().split(" ").map(Number);

let count = 0;

for (let i = 0; i < examinees.length; i++) {
  if (examinees[i] > 0) {
    examinees[i] = examinees[i] - A;
    count++;
  }
}

for (let i = 0; i < examinees.length; i++) {
  if (examinees[i] > 0) {
    let num = Math.floor(examinees[i] / B);
    count = count + num;
    examinees[i] = examinees[i] - num * B;
  }
}

for (let i = 0; i < examinees.length; i++) {
  if (examinees[i] > 0) {
    count++;
  }
}

console.log(count);
