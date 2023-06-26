function solution(x) {
    var str = x+''
    var total = 0
    for(let i=0; i<str.length; i++){
        total = total + parseInt(str[i])
    }
    if(x % total == 0){
        return true
    }else{
        return false
    }
}