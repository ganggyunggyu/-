const fs = require("fs");
input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();

const queue = [];
const answer = [];

for (const command of input) {
  if (command.includes("push")) {
    const [str, num] = command.split(" ");
    queue.push(num);
  }
  if (command.includes("pop")) {
    if (queue.length == 0) {
      answer.push(-1);
    } else {
      let popItem = queue.shift();
      answer.push(popItem);
    }
  }
  if (command.includes("size")) {
    answer.push(queue.length);
  }
  if (command.includes("empty")) {
    if (queue.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }
  if (command.includes("front")) {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[0]);
    }
  }
  if (command.includes("back")) {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[queue.length - 1]);
    }
  }
}
console.log(answer.map(Number).join("\n"));