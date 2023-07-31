const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const D = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const [N, M] = input.shift().split(" ").map(Number);
const [startX, startY, startDir] = input.shift().split(" ").map(Number);
const graph = input.map((el) => el.split(" ").map(Number));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

let move = 0;

const bfs = (x, y, dir) => {
  const queue = [];
  queue.push([x, y, dir]);
  while (queue.length) {
    let [x, y, dir] = queue.shift();

    if (!graph[x][y] && !visited[x][y]) {
      visited[x][y] = 1;
      move++;
    }
    for (let i = 0; i < D.length; i++) {
      if (dir - 1 < 0) {
        dir = dir + 4;
      }
      dir = dir - 1;
      const next_x = x + D[dir][0];
      const next_y = y + D[dir][1];
      if (!graph[next_x][next_y] && !visited[next_x][next_y]) {
        queue.push([next_x, next_y, dir]);
        break;
      }
      if (i === 3) {
        if (dir + 2 > 3) {
          dir = dir - 4;
        }
        const backDir = dir + 2;
        const back_x = x + D[backDir][0];
        const back_y = y + D[backDir][1];
        if (!graph[back_x][back_y]) {
          queue.push([back_x, back_y, dir]);
          break;
        }
      }
    }
  }
};

bfs(startX, startY, startDir);

console.log(move);