const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');

const N = +input[0];
const M = +input[1];
const nums = [];
for (i = 1; i <= N; i++) {
  nums.push(i);
}

const permutation = (nums) => {
  const result = [];
  const cur = [];
  const backtrack = (start) => {
    if (cur.length === M) {
      result.push([...cur]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (!cur.includes(nums[i])) {
        cur.push(nums[i]);
        backtrack(i + 1, cur);
        cur.pop();
      }
    }
  };
  backtrack(0);
  return result;
};
console.log(permutation(nums).join('\n').replaceAll(',', ' '));
