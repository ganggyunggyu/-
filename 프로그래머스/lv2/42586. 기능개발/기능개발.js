function solution(progresses, speeds) {
    let days = []
    let arr = []
    let maxDay = 0
    let cnt = 1
    for(let i=0; i< progresses.length; i++){
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    console.log(days)
    for(let i=0; i<=days.length; i++){
        console.log(maxDay)
        if(i == 0){
            maxDay = days[i]
            continue
        }
        if(maxDay >= days[i]){
            cnt++
        }else{
            maxDay = days[i]
            arr.push(cnt)
            cnt = 1
        }
    }
    return arr
}