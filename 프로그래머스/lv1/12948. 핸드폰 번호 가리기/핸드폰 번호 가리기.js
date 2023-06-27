function solution(phone_number) {
    let startIndex = phone_number.length-4
    let resultArr = []
    for(let i=0; i<phone_number.length; i++){
        if(i<startIndex){
            resultArr.push('*')    
        }else{
            resultArr.push(phone_number[i])
        }
        
    }
    return resultArr.join('')
}