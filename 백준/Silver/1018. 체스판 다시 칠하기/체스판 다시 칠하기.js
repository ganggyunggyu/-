const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const [N, M] = input
  .shift()
  .split(' ')
  .map((el) => +el);

const W = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const B = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const result = [];

const isWhite = (x, y) => {
  let cnt = 0;
  //흰색으로 시작하는 보드로 도는 배열
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (W[i][j] !== input[i + x][j + y]) {
        cnt++;
      }
    }
  }
  result.push(cnt);
};

const isBlack = (x, y) => {
  let cnt = 0;
  //검정색으로 시작하는 보드로 도는 배열
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (B[i][j] !== input[i + x][j + y]) {
        //B보드와 인풋을 비교해서 다르면 고쳐줘야 하기 때문에 ++
        cnt++;
      }
    }
  }
  result.push(cnt);
};

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    //초과되는 만큼의 숫자를 전달해준다
    isWhite(i, j);
    isBlack(i, j);
  }
}

console.log(Math.min(...result));