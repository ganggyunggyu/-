function solution(n, computers) {
    const visited = Array.from({length : n}, ()=>false)
    console.log(visited)
    let cnt = 0
    
    const dfs = (i) => {
        visited[i] = true
        
        for(let j = 0; j < computers[i].length; j++){
            if(computers[i][j] === 1 && !visited[j]){
                dfs(j)
            }
        }
    }
    
    for(let i=0; i<computers.length; i++){
        if(!visited[i]){
        dfs(i)
        cnt++   
        }
    }
    return cnt
}