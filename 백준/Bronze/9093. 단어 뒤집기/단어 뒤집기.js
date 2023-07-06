const fs = require("fs");
const { join } = require("path");
let input = fs.readFileSync("/dev/stdin", "utf8").toString().split('\n');
const N = input.shift();
let result = []

for(let i=0; i<N; i++){
    let arr2 = []
    let arr = input[i].split(' ')
    for(let j=0; j<arr.length; j++){
        let str = arr[j].split('').reverse().join('')
        arr2.push(str)
    }
    let lastArr = arr2.join(' ')
    result.push(lastArr)
}
console.log(result.join("\n"))