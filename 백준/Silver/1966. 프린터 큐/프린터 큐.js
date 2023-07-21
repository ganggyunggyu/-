const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const T = +input.shift().split(" ");

for (let i = 0; i < T; i++) {
  let [M, N] = input.shift().split(" ").map(Number);
  const printer = input.shift().split(" ").map(Number);
  solution(M, N, printer);
}

function solution(N, M, printer) {
  let count = 1;
  while (true) {
    if (M === 0 && printer[0] === Math.max(...printer)) {
      //M 이 0이고 printer[0]이 가장 큰 수일때 종료 선언
      console.log(count);
      break;
    } else if (M !== 0 && printer[0] === Math.max(...printer)) {
      //M이 0이 아니고 printer[0]이 가장 큰 수일때
      printer.shift();
      count++;
      M--;
    } else if (M == 0 && printer[0] !== Math.max(...printer)) {
      // M이 0이고 printer[0]이 가장 큰 수가 아닐때
      let tmp = printer.shift();
      printer.push(tmp);
      M = printer.length - 1;
    } else if (M !== 0 && printer[0] !== Math.max(...printer)) {
      let tmp = printer.shift();
      printer.push(tmp);
      M--;
    }
  }
}
