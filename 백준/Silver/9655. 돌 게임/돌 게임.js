const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let N = +input.shift();

if (N % 2 !== 0) {
  console.log('SK');
} else {
  console.log('CY');
}
