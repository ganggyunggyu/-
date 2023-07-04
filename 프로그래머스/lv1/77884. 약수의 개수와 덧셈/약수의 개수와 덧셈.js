function solution(left, right) {
    let answer = 0
    while(left <= right){
        let cnt = 0
        for(let i=1; i<=left; i++){
            if(left % i == 0){
                cnt ++
            }
        }
        if(cnt % 2 == 0){
            answer = answer + left
        }else{
            answer = answer - left
        }
        left++
    }
    return answer
}