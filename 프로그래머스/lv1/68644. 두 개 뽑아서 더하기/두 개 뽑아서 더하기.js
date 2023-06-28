function solution(numbers) {
    let resultArr = []

    
    
    
    
    
    
    
    
    
    for(let i=0, j=0; i<numbers.length; j++){
        if(i==j){
            continue;
        }
        if(!resultArr.includes(numbers[i]+numbers[j])){
            if(numbers[j] !== undefined){
                resultArr.push(numbers[i] + numbers[j])
            }else{
                j=0
                i++
        }
        }

    }
    return resultArr.sort((a,b)=>{return a-b})
}
