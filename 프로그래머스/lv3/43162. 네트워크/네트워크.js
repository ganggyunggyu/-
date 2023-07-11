function solution(n, computers) {
    const visited = Array.from({length : 3}, ()=>false)

    let cnt = 0

    const dfs = (v) => {
        visited[v] = true
        
        for(let j=0; j<computers[v].length; j++){
            if(computers[v][j] == 1 && !visited[j])
            dfs(j)
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i)
            cnt++
        }
    }
    return cnt

}