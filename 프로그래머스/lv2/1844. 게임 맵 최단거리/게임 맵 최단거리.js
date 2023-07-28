function solution(maps) {

    const row = maps.length;
    const col = maps[0].length;
    const visited = Array.from({length : row}, ()=>Array.from({length : col},()=>false))
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const bfs = (x, y) => {
        const queue = []
        visited[x][y] = true
        queue.push([x,y])
        while(queue.length !== 0){
            let cur_v = queue.shift()
            for(let i=0; i<dir.length; i++){
                let next_x = 0
                let next_y = 0
                next_x = cur_v[0] + dir[i][0]
                next_y = cur_v[1] + dir[i][1]
                if(next_x >= 0 && 
                   next_y >= 0 && 
                   next_x < row &&
                   next_y < col &&
                   maps[next_x][next_y] === 1 &&
                   visited[next_x][next_y] === false ){
                    queue.push([next_x, next_y])
                    visited[next_x][next_y] = true
                    maps[next_x][next_y] = maps[cur_v[0]][cur_v[1]]+1
                        if(visited[row-1][col-1] === true){
                            return maps[row-1][col-1]
                        }
                }
            }
        }
        if(visited[row-1][col-1] === false) return -1
    }
    
    return bfs(0,0)

 
    


}