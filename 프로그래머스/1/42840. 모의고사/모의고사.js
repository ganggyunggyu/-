function solution(answers) {
    const result = []
    
    const 일번학생 = [1,2,3,4,5]
    const 이번학생 = [2,1,2,3,2,4,2,5]
    const 삼번학생 = [3,3,1,1,2,2,4,4,5,5]
    
    const 일번학생마지막=일번학생.length-1
    const 이번학생마지막=이번학생.length-1
    const 삼번학생마지막=삼번학생.length-1
    
    let 일번학생포인터=0
    let 이번학생포인터=0
    let 삼번학생포인터=0
    
    let 일번학생정답=0
    let 이번학생정답=0
    let 삼번학생정답=0
    
    answers.forEach((el,i)=>{
        if(el == 일번학생[일번학생포인터]){
            일번학생정답++
        }
        if(el == 이번학생[이번학생포인터]){
            이번학생정답++
        }
        if(el == 삼번학생[삼번학생포인터]){
            삼번학생정답++           
        }
        
        일번학생포인터++
        이번학생포인터++
        삼번학생포인터++
        
        if(일번학생포인터 > 일번학생마지막){
            일번학생포인터 = 0
        }
        if(이번학생포인터 > 이번학생마지막){
            이번학생포인터 = 0
        }
        if(삼번학생포인터 > 삼번학생마지막){
            삼번학생포인터 = 0
        }
            
    })
    
    // console.log(일번학생정답 , 이번학생정답 , 삼번학생정답)
    // console.log(일번학생포인터 , 이번학생포인터 , 삼번학생포인터)
    const arr = [일번학생정답, 이번학생정답, 삼번학생정답]
    
    const a = Math.max(...arr)

    arr.forEach((el,i)=>{
        if(a===el){
            result.push(i+1)
        }
    })
    // console.log(result)
    return result
    
}