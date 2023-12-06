const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString()


const N = +input;

const dp = Array.from({ length: N + 1 }, () => 0);
//dp 배열의 인덱스가 숫자다

for (let i = 2; i < N + 1; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

/**
 * [0, 0, 1, 1, 2, 3, 2, 3, 3, 2, 3]  //1이 되기까지 연산하는 수
 *        2, 3, 4, 5, 6, 7, 8, 9, 10  //정수
 * 2 || 3 으로 나누어 떨어지는 경우만 분기 실행되며
 * 그 외의 경우에는 1가지 경우의 수가 늘어나는 것으로 본다
 */

console.log(dp[N]);