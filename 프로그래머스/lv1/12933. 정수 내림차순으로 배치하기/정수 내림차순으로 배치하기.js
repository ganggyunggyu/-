function solution(n) {
    return parseInt([...n+('')].sort(function(a,b){
        return (b-a)
    }).join(''))
    
} 