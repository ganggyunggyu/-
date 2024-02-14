const getGraph = (edges) => { 
        const line = edges.reduce((map, key) => {
        if (!map.has(key[0])) {
            // 최초 접근 key : [1, 0]
            // 출발노드 -> 다른노드로 향하는 간선의 수
            // 다른노드 -> 출발노드가 오는 수
            map.set(key[0], [1, 0]);
        } else {
            //이후에는
            const [go, come] = map.get(key[0])
            map.set(key[0], [go+1, come])
        }
        if(!map.has(key[1])){
            map.set(key[1], [0, 1])
        } else {
            const [go, come] = map.get(key[1])
            map.set(key[1], [go, come+1])
        }
        return map
    }, new Map())
        return line
}




function solution(edges) {
    const graph = getGraph(edges);

    const result = Array.from({length : 4},()=>0)

    for(const [key, value] of graph){ 
        const [go, come] = value
        //생성 정점 조건
        //나에게 오는 정점이 2개 이상이다
        //내가 가는 정점이 0개다
        if(2 <= go && come == 0) { 
            result[0] = key
        //막대 조건
        //내가 가는 정점이 0임
        } else if(go == 0) {
            result[2] = result[2] + 1
        //8자 조건
        //from, to 둘 다 2보다 큼
        } else if(go >= 2 && come >= 2){
            result[3] = result[3] + 1
        }
    }
    //도넛은 생성정점에 오는 정점의 수 - 막대 - 8자
    result[1] = graph.get(result[0])[0] - result[2] - result[3]
    return result
}

//생성 정점, 도넛, 막대, 8자
/*

도넛 
n개의 정점 n개의 간선

막대
n개의 정점 n-1개의 간선

8자모양
2n+1개의 정점 2n+2개의 간선

*/