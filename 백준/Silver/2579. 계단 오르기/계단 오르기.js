const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const nums = [0, ...input.map(Number)];

/**
 * 입력
 * 6
 * 10, 20, 15, 25, 10, 20
 * 출력
 * 10 -> 20 -> 25 -> 20 === 75
 */

/**
 * 계단을 한칸 or 두칸 올라갈수 있다
 * 한칸을 연속 세번 갈수 없다
 * 가장 큰 점수를 찾아라
 */

const dp = Array.from({ length: N + 1 }, () => 0);

/**
 * 계단 두개를 연속으로 밟는게 최고 점수
 * 1번계단 -> 2번계단 -> 4번계단 vs 1번계단 -> 3번계단 -> 4번계단
 * 4번 계단의 입장에서 어느 경우의 수가 더 큰지 판단해서 4번에 할당
 * 4->5->7
 * 4->6->7
 */

dp[1] = nums[1];
//첫번째 계단 점수 초기화
dp[2] = nums[1] + nums[2];
//두번째 점수 초기화

for (let i = 3; i <= nums.length; i++) {

  dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3] + nums[i - 1]);
  // 15 + (10, 0 + 20)
  // 25 + (30, 10 + 15)
}

console.log(dp[N]);
