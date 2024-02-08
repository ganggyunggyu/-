function solution(friends, gifts) {
    
    
    const map = new Map();
    
    const graph = Array.from({length : friends.length},()=>0).map(_ => new Array(friends.length).fill(0));
    const score = Array.from({length : friends.length},()=>0)
    const results = Array.from({length : friends.length},()=>0)
    friends.forEach((name, idx) => {
        map.set(name, idx);
    })
    
    
    gifts.forEach(el => {
        const [from, to] = el.split(" ");
        graph[map.get(from)][map.get(to)]++;
    })
    
    
    for (let i=0; i<friends.length; i++) {
        score[i] = graph[i].reduce((total, cur) => total += cur, 0)
        
        for (let j=0; j<friends.length; j++) {
            score[i] -= graph[j][i];       
        }
    }
    
    
    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++) {
            if (i===j) continue;
            if (graph[i][j] > graph[j][i]) results[i]++;
            if (graph[i][j] < graph[j][i]) results[j]++;
            //선물을 먼저 비교한다.
            if (graph[i][j] === graph[j][i]) {
                //이번달 선물 개수가 같다면 선물 지수료 비교한다.
                if (score[i] > score[j]) results[i]++
                if (score[i] < score[j]) results[j]++
            }
        }
    }
    
    
    
    return Math.max(...results)
}

/*
다음달에 누가 선물을 많이 받을까 예측

A -> B 5
B -> A 3
A가 두개 더 많이 줫음
A는 B에게 선물을 하나 받는다.

두 사람이 만약 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면?
=> 선물지수가 더 큰 사람이 선물을 하나 받는다.

선물지수 공식 : 이번달까지 자신이 준 선물의 수에서 받은 선물의 수를 뺀 값

1. 이번달 선물 정보에 대한 배열이 필요하다.
2. 이번달 선물 정보를 이용해 선물 지수를 기록해준다.
3. 선물 지수를 이용해 다음달 받을 선물에 대한 정보를 계산해준다.


*/