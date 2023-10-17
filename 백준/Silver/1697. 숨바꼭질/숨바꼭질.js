const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

const N = input.shift();
const K = input.shift();

const visited = Array.from({ length: 100001 }, () => false);

const bfs = (start, end) => {
  const queue = [];
  queue.push([start, 0]);
  visited[start] = true;
  while (queue.length !== 0) {
    const [curN, x] = queue.shift();
    if (curN === end) return x;
    for (nextN of [curN + 1, curN - 1, curN * 2]) {
      if (!visited[nextN] && nextN >= 0 && nextN <= visited.length) {
        queue.push([nextN, x + 1]);
        visited[nextN] = true;
      }
    }
  }
};

console.log(bfs(N, K));