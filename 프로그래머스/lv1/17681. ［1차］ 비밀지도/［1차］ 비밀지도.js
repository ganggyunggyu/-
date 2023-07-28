function solution(n, arr1, arr2) {
    let num = 0
    let arr = []
    for(let i=0; i<n; i++){
        num = 0
        num = (arr1[i] | arr2[i]).toString(2).padStart(n, '0').replaceAll('1','#').replaceAll('0',' ')
        arr.push(num)
    }
    return arr
}