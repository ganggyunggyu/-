const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = input.shift();
const users = input.map((el) => el.split(" "));


users.sort((a, b) => {
  a = a[0];
  b = b[0];
  return a - b;
});

console.log(users.join("\n").replaceAll(",", " "));
