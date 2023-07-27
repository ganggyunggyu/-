const { default: cluster } = require('cluster')
const fs = require('fs')
const input = fs.readFileSync('dev/stdin', 'utf-8').toString().trim().split('\n')

const T = input.shift()


const moves = input.join(' ').split(' ')

const dir = [[1,0], [-1,0], [0,-1],[0,1]]


const solution = (n) => {
  let cur_dir = 0
  let tutle = [0 , 0]
  let max_x = 0
  let max_y = 0
  let min_x = 0
  let min_y = 0

  for(let i=0; i<moves[n].length; i++){
    if(moves[n][i]=='F'){
      tutle[0] = tutle[0] + dir[cur_dir][0]
      tutle[1] = tutle[1] + dir[cur_dir][1]
    }
    else if(moves[n][i]=='B'){
      tutle[0] = tutle[0] - dir[cur_dir][0]
      tutle[1] = tutle[1] - dir[cur_dir][1]
    }
    else if(moves[n][i]=='L'){
    if(cur_dir === 0){
      cur_dir = 2
    }else if(cur_dir === 1){
      cur_dir = 3
    }else if(cur_dir === 2){
      cur_dir = 1
    }else{
      cur_dir = 0
    }
    }
    else if(moves[n][i] =='R'){
      if(cur_dir === 0){
        cur_dir = 3
      }else if(cur_dir === 1){
        cur_dir = 2
      }else if(cur_dir === 2){
        cur_dir = 0
      }else{
        cur_dir = 1
      }
    }


    tutle[0] > max_x ? max_x = tutle[0] : max_x = max_x
    tutle[0] < min_x ? min_x = tutle[0] : min_x = min_x
    tutle[1] > max_y ? max_y = tutle[1] : max_y = max_y
    tutle[1] < min_y ? min_y = tutle[1] : min_y = min_y
  }
  return Math.abs((max_x - min_x)*(max_y - min_y))
   
}

for(let i=0; i<moves.length; i++){
  console.log(solution(i))
}

