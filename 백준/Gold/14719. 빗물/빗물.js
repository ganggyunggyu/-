const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const [H, W] = input.shift().split(' ').map(Number)

const rain = input.join('').split(' ').map(Number)



let r = rain.length - 1;
let l = 0;

let left = 0;
let right = 0;

let result = 0;

while (l < r) {
  if (rain[l] < rain[r]) {
    if (rain[l] >= left) {
      left = rain[l];
    } else {
      result += left - rain[l];
    }
    l++;
  } else {
    if (rain[r] >= right) {
      right = rain[r];
    } else {
      result += right - rain[r];
    }
    r--;
  }
}
console.log(result);
