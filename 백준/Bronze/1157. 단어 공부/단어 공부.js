const ts = require("fs");
const input = ts.readFileSync('dev/stdin').toString().trim().split(' ')

const str = input
  .map((el) => el.toLocaleUpperCase())
  .join("")
  .split("");

const map = new Map();
const result = [];

str.sort((a, b) => (a > b ? 1 : -1));

for (const el of str) {
  if (map.has(el)) {
    map.set(el, map.get(el) + 1);
  } else {
    map.set(el, 1);
  }
}

for (const value of map) {
  result.push(value);
}

result.sort((a, b) => {
  return b[1] - a[1];
});

if (result[1] == undefined) {
  console.log(result[0][0]);
} else {
  if (result[0][1] !== result[1][1]) {
    console.log(result[0][0]);
  } else {
    console.log("?");
  }
}
