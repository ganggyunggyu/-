function solution(numbers, target) {
    let cnt = 0
    
    const dfs = (depth, sum) => {
        if(depth === numbers.length){
            if(sum === target){
                cnt++
            }
            
            return
            
        }else{
            dfs(depth+1, sum+numbers[depth])
            
            dfs(depth+1, sum-numbers[depth])
        }
        
    }
    
    dfs(0,0)

    return cnt
}