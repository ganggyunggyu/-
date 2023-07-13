const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");



const n = +input[0]

const [x, y] = input[1].split(' ')
const datas = input.slice(3).map(el => el.split(' ').map(Number))


const nodes = Array.from({ length: n + 1 }, () => [])
const depth = Array.from({ length: n + 1 }, () => 0)
datas.forEach(([from, to]) => {
    nodes[from].push(to)
    nodes[to].push(from)
})


const bfs = (start, end) => {
    depth[start] = 1
    const queue = []
    queue.push(start)
    while (queue.length != 0) {
        let cur_v = queue.shift()
        for (const node of nodes[cur_v]) {
            if (depth[node] == 0) {
                queue.push(node)
                depth[node] = depth[cur_v] + 1
            }
        }
    }
    if (depth[end] === 0) {
        return -1
    } else {
        return Math.abs(depth[start] - depth[end]);
    }
}

console.log(bfs(x, y))