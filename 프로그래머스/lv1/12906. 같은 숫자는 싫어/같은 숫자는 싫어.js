function solution(arr){
    let resultArr = []
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            resultArr.push(arr[i])
        }
    }
    return resultArr
}