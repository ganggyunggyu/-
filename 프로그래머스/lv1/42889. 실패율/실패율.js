function solution(N, stages) {
    const result = [];
    
    for(let i = 1;i <= N; i++){
        
        let clear = 0;
        let yet = 0;
        
        for(let j = 0; j < stages.length; j++){
            if(stages[j] >= i){
                //유저가 도달한 스테이지가 i보다 크다면 클리어 했음을 의미한다
                clear++;
            }
            if(stages[j] == i){
                //유저가 도달한 스테이지가 i와 같다면 아직 클리어하지 못한 것을 의미한다
                yet++;
            }
        }
        
        //스테이지의 단계와 확률을 객체로 만들어서 기록한다
        result.push({stage:i,prob:yet/clear});
        
    }
    

    result.sort((a,b)=>{
        if(a.prob === b.prob){
            return a.stage - b.stage;
        }else{
            return b.prob - a.prob;
        }
    })

    return result.map(el => el.stage)
}