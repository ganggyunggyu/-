/** @format */

const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input.shift().split(' ');

const graph = input.map((el) => el.split('').map((el2) => +el2));

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: graph.length }, () =>
  Array.from({ length: graph[0].length }, () => false)
);
const cntGraph = Array.from({ length: graph.length }, () =>
  Array.from({ length: graph[0].length }, () => 0)
);

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = true;
  cntGraph[x][y] += 1;

  /**
   *그래프를 모두 방문
   *조건은 1인 경우에만 이동 가능
   *0보다 커야하고 N-1 , M-1 을 넘어서는 안된다
   *최단거리 찾기 === BFS
   */
  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();
    for (const dir of dirs) {
      const [nextX, nextY] = [curX + dir[0], curY + dir[1]];
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < graph.length &&
        nextY < graph[0].length &&
        visited[nextX][nextY] === false &&
        graph[nextX][nextY] === 1
      ) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
        cntGraph[nextX][nextY] = cntGraph[curX][curY] + 1;
      }
    }
  }
};

bfs(0, 0);

console.log(cntGraph[N - 1][M - 1]);
