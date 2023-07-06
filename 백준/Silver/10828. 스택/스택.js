const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin", "utf8");
// let input = fs.readFileSync("example.txt").toString().split('\n');
let input = fs.readFileSync("/dev/stdin", "utf8").toString().split('\n');

let n = input[0]
let result = []
let arr = []
let answer = []

for(let i=1; i<=n; i++){
    result.push(input[i])
}

for(let i=0; i<result.length; i++){
    if(result[i].includes('push')){
        arr.push(+result[i].replace('push', ''))
    }
    if(result[i].includes('top')){
        if(arr[arr.length-1] == undefined){
            answer.push(-1)
        }else{
            answer.push(arr[arr.length-1])
        }
    }
    if(result[i].includes('size')){
        answer.push(arr.length)
    }
    if(result[i].includes('empty')){
        if(arr.length === 0){
            answer.push(1)
        }else{
            answer.push(0)
        }
    }
    if(result[i].includes('pop')){
        str = arr.pop()
        if(str === undefined){
            answer.push(-1)
        }else{
            answer.push(str)
        }
    }
}

console.log(answer.join('\n'))