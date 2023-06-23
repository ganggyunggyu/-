function solution(s) {
    let abcNumArr = s.split(' ').map(el=>Number(el)).sort(function(a,b){return a-b})
    let numArr = []
    numArr.push(abcNumArr[0], abcNumArr[abcNumArr.length-1])
    return numArr.join(' ').toString()
}