class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    //최초엔 자기 자신을 부모로 바라보게 한다
  }
  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) this.parent[rootB] = rootA;
    //다르다면 같은 곳을 B는 A를 바라본다
  }
  //주어진 원소 찾기
  find(node) {
    if (this.parent[node] === node) return node;
    //부모의 원소와 나의 원소가 같다면 나의 원소를 리턴
    return this.find(this.parent[node]);
    //부모의 원소의 나의 원소가 다르다면 부모의 원소를 리턴
  }
  //연결 여부 확인
  same(a, b) {
    return this.find(a) === this.find(b);
  }
}

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const M = +input.shift();
const graph = input.map((el) => el.split(' ').map(Number));

graph.sort((a, b) => a[2] - b[2]);

const disjointSet = new DisjointSet(N);
let result = 0;
// console.log(graph);
// console.log(disjointSet);
for (let i = 0; i < graph.length; i++) {
  const [from, to, cost] = graph[i];
  if (!disjointSet.same(from, to)) {
    //둘의 부모가 같지 않다 즉 연결되어있지 않다면
    disjointSet.union(from, to);
    result += cost;
    // console.log(`${from}이랑 ${to}은 연결되었습니다. ${cost}만큼의 비용이 추가되었습니다.`);
    // console.log(`누적된 간선 비용 : ${result}`);
    // console.log(disjointSet.parent);
  } else {
    // console.log(`${from}이랑 ${to}은 이미 연결되어있습니다.`);
    // console.log(disjointSet.parent);
    // console.log(disjointSet.find(from));
    // console.log(disjointSet.find(to));
  }
}
console.log(result);
