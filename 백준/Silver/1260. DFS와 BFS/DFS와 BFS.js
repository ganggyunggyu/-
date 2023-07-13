const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [Node, Eege, Start_Node] = input.shift().split(' ').map(Number);

const Nodes = input.map(el => el.split(' ').map(Number))

const graph = Array.from({ length: Node + 1 }, () => [])

Nodes.forEach(([from, to]) => {
    graph[from].push(to)
    graph[to].push(from)
})

for(let i=0; i<graph.length; i++){
    graph[i].sort((a,b)=>{return a-b})
}

const bfs = (startNode) => {
    const queue = [] 
    const visited = []   
    queue.push(startNode)
    visited.push(startNode)
    while (queue.length != 0) {
        let cur_v = queue.shift()
        for(const v of graph[cur_v]){
            if(!visited.includes(v)){
                queue.push(v)
                visited.push(v)
            }
        }
    }
    return visited
}

const visited = []

const dfs = (startNode) => {
    visited.push(startNode)
    for(let i=0; i<graph[startNode].length; i++){
        if(!visited.includes(graph[startNode][i])){
            dfs(graph[startNode][i])
        }
    }
    return visited
};

console.log(`${dfs(Start_Node).join(' ')}\n${bfs(Start_Node).join(' ')}`)