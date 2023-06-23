function solution(participant, completion) {
    console.log(participant.sort())
    console.log(completion.sort())
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}