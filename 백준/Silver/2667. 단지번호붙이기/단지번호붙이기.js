const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf-8').toString().trim().split('\n')

const N = input.shift()

const visited = Array.from({length : N},()=>Array.from({length : N}, ()=>false))

let count = 0
let numbering = 0
let numberingsArr = []

const dfs = (r, c) => {
    visited[r][c] = true
    numbering++
    let [cur_r, cur_c] = [r, c]
    const Dirs = [[-1, 0],[1, 0],[0, -1],[0, 1]]
    for(const dir of Dirs){
        const next_r = cur_r + dir[0]
        const next_c = cur_c + dir[1]
        if( next_r >= 0 &&
            next_c >= 0 &&
            next_r < N &&
            next_c < N &&
            visited[next_r][next_c] == false &&
            input[next_r][next_c] == '1'){
            dfs(next_r,next_c)
        }
    }
}

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(visited[i][j] == false && input[i][j] == '1'){
        dfs(i, j)
        count++
        numberingsArr.push(numbering)
        numbering=0
        }
    }
}
console.log(`${+count}\n${numberingsArr.sort((a,b)=>{return a - b}).map(Number).join('\n')}`)