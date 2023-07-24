const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const L = +input.shift()
const N = +input.shift()
const paper = input.map(el => el.split(' ').map(Number))





const anticipation = (input) => {
  const tmp = []
  for(let i=0; i<input.length; i++){
    const [P ,K] = input[i]
    tmp.push(K - P)
  }
  for(let i=0; i<tmp.length; i++){
    if(tmp[i] == Math.max(...tmp)){
      return i + 1
    }
  }
}

const actuality = (input) => {
  const count = Array.from({length : N+1},()=>0)
  const rollCake = Array.from({length : L+1},()=>0)
  input.unshift([])

  for(let i=1; i<input.length; i++){
    const [S, E] = input[i]
    for(let j = S; j<=E; j++){
      if(rollCake[j] == 0){
        rollCake[j] = i
      }
    }
  }
  for(const number of rollCake){
    if(number===0){
      continue;
    }
    if(count[number] === 0){
      count[number] = 1
    }else{
      count[number] = count[number] + 1
    }
  }
  for(let i=0; i<count.length; i++){
    if(count[i] === Math.max(...count)){
      return i
    }
  }
}



console.log(`${anticipation(paper)}\n${actuality(paper)}`)