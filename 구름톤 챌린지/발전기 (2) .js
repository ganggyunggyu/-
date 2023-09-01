const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
	input.push(line);
	
});

/*
0,0 부터 탐색
모든 곳을 방문
같은 숫자가 K개 연속으로 있는 경우 단지 번호를 Key값으로 지정 후 value를 1로 할당 0
이미 Key가 있다면 value + 1
*/

rl.on('close', () => {
	const [N,K] = input.shift().split(' ').map(Number)
	const graph = input.map(el=>el.split(' ').map(Number))
	const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
	const visited = Array.from({length : N},()=>Array.from({length : N},()=>false))
	const obj = {}

	
	const bfs = (x,y) => {
		let cnt = 1
		const queue = []
		visited[x][y] = true
		queue.push([x,y])
		while(queue.length !== 0){
			const [cur_x, cur_y] = queue.shift()
			for(const dir of dirs){
				const next_x = cur_x + dir[0]
				const next_y = cur_y + dir[1]
				
				if(next_x < N && 
					 next_y < N && 
					 next_x >= 0 && 
					 next_y >= 0 && 
					 graph[cur_x][cur_y] === graph[next_x][next_y] && 
					 visited[next_x][next_y] === false){
						queue.push([next_x, next_y])
						visited[next_x][next_y] = true
						cnt++
				}
			}
		}
		if(cnt >= K){
			 if(!obj[graph[x][y]]){
				 obj[graph[x][y]] = 0
			 }
			obj[graph[x][y]] += 1
		}
	}

	
	
	for(let i=0; i<N; i++){
		for(let j=0; j<N; j++){
			if(visited[i][j] === false){
			bfs(i,j)	
			}
		}
	}

	
const entries = Object.entries(obj)



	entries.sort((a,b)=>{
		if(a[1] === b[1]){
			return b[0] - a[0]
		}
		return b[1] - a[1]
	})
	

	
console.log(entries[0][0])
	
})
