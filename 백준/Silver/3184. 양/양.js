const fs = require('fs')
const input = fs.readFileSync('dev/stdin', 'utf-8').toString().trim().split('\n')

const [R, C] = input.shift().split(' ')


const visited = Array.from({ length: R }, () => Array.from({ length: C }, () => false))

let [o, v] = [0, 0]
let [cnt_o, cnt_v] = [0, 0]
const dfs = (r, c) => {
    visited[r][c] = true;
    const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    const [cur_r, cur_c] = [r, c]
    if(input[r][c] == 'o'){
        o = o+1
    }else if(input[r][c] == 'v'){
        v = v+1
    }
    for (let i = 0; i < dir.length; i++) {
        let next_r = cur_r + dir[i][0]
        let next_c = cur_c + dir[i][1]
        if (next_r >= 0 && next_r < R && next_c >= 0 && next_c < C) {
            if (visited[next_r][next_c] == false && input[next_r][next_c] != '#') {
                    dfs(next_r, next_c)
            }
        }
    }
}


for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (visited[i][j] == false && input[i][j] != '#') {
            dfs(i, j)
            if(o > v){
                cnt_o = cnt_o + o
            }else{
                cnt_v = cnt_v + v
            }
            [o, v] = [0, 0]
        }
    }
}
console.log(cnt_o, cnt_v)
