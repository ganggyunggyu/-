const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const treeNumber = input.join("").split(" ").map(Number);

const result = [1, 2, 3, 4, 5];

while (true) {
  let cnt = 0;
  let n = 0;
  for (let i = 0; i < 4; i++) {
    if (treeNumber[i] > treeNumber[i + 1]) {
      n = treeNumber[i];
      treeNumber[i] = treeNumber[i + 1];
      treeNumber[i + 1] = n;
      console.log(treeNumber.join(" "));
    }
  }
  for (let i = 0; i < 5; i++) {
    if (treeNumber[i] == result[i]) {
      cnt++;
    }
  }
  if (cnt == 5) {
    break;
  }
}
