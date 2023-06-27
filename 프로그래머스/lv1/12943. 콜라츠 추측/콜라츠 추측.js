function solution(num) {
    if(num == 1){
        return 0
    }
    
    let count = 0
    while(count < 500){
        if(num == 1){
            return count
        }else{
            if(num % 2 == 0){
                num = num / 2
                count = count + 1
            }else if(num % 2 == 1){
                num = num * 3 + 1
                count = count + 1
            }
        }

    }
    return -1
}