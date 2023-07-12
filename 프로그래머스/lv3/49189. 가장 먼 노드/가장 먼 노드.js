function solution(n, edge) {
    const nodes = Array.from({length : n + 1}, ()=>[])
    const visited = Array.from({length : n + 1}, ()=>[false])
    const depth = Array.from({length : n + 1}, ()=>1)
    let arr = []
    for(let [from, to] of edge){
        nodes[from].push(to)
        nodes[to].push(from)
    }

    const bfs = (v) => {
        const queue = []
        queue.push(v)
        visited[v] = true
        let arr = []
        while(queue.length != 0){
            let cur_v = queue.shift()

            for(let node of nodes[cur_v]){
                if(visited[node] != true){
                    visited[node] = true
                    depth[node] = depth[cur_v] + 1
                    queue.push(node)
                    arr.push(node)
                }
            }
            
        }
        let max =  depth.sort((a,b) => {return b-a})[0]
        let maxArr = depth.filter(el => el==max)
        return maxArr.length
    }
    return bfs(1) 
   
}

