
function solution(n) {
    let answer = []

    const hanoi = (n, from, mid, to) => {
        if(n == 0){
            return
        }else{
            hanoi(n - 1 , from, to, mid);
            answer.push([from, to]);
            hanoi(n - 1, mid, from, to);
        }
    }

     hanoi(n, 1, 2, 3)
            
    return answer
}


