function solution(s) {
    if(s[0] == ')'){
    return false
    }
    let arr = []
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            arr.push(')')
        }else{
            arr.pop()
        }
    }
    return arr.length === 0
    if(arr.length != 0){
        return false
    }


    
}