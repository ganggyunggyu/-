const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, ...arr] = input;

const times = arr
  .map((el) => el.split(' ').map((el) => +el))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let tmp = 0;
let result = 0;

for (const time of times) {
  if (time[0] >= tmp) {
    result++;
    tmp = time[1];
  }
}

console.log(result);
