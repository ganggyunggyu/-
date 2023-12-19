const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M, K, X] = input.shift().split(' ').map(Number);
/**
 * N 첫째 줄의 도시 개수
 * M 도로의 개수
 * K 거리 정보
 * X 출발 도시의 번호
 */
const arr = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
const depth = Array.from({ length: N + 1 }, () => 0);
const result = [];

arr.map(([from, to]) => graph[from].push(to));

const bfs = (start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const cur = queue.shift();
    if (depth[cur] == K) {
      result.push(cur);
      continue;
    }
    for (const next of graph[cur]) {
      if (!visited[next]) {
        queue.push(next); 
        depth[next] = depth[cur] + 1;
        visited[next] = true;
      }
    }
  }
};
//출발도시를 기준으로 BFS
bfs(X);
if (result.length) {
  console.log(result.sort((a, b) => a - b).join('\n'));
} else {
  console.log(-1);
}
