const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = input.shift();

const strArr = input;

const arr2 = [];
for (const str of strArr) {
  if (!arr2.includes(str)) {
    arr2.push(str);
  }
}

arr2.sort((a, b) => a.localeCompare(b));

arr2.sort((a, b) => {
  a = a.length;
  b = b.length;
  return a - b;
});

console.log(arr2.join("\n"));
