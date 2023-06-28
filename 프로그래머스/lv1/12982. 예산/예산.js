function solution(d, budget) {
    let cnt = 0
    d.sort((a,b) =>{
        return a-b
    })
    for(let i=0; i<d.length; i++){
        if(d[i] <= budget){
            budget = budget - d[i]
            cnt++
            console.log(budget)
        }else{
            return cnt
        }
    }
    return cnt
}