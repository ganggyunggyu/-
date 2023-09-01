const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
	input.push(line);

	
	if(input.length === input[0][0]){
	rl.close();	
	}
	
});

rl.on('close', () => {
	const [N, K] = input.shift().split(' ').map(Number)

	const graph = input.map(el=>el.split(' ').map(Number))

	const visited = Array.from({length : N},()=>Array.from({length : N},()=>false))
	const goorm = Array.from({length : N},()=>Array.from({length : N},()=>0))


	const dir = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]
	let result = 0
	const bfs = (x,y) => {
		const queue = []
		queue.push([x,y])
		visited[x][y] = true
		while(queue.length !== 0){
			const [cur_x, cur_y] = queue.shift()
			
			for(let i=0; i<dir.length; i++){
				const next_x = cur_x + dir[i][0]
				const next_y = cur_y + dir[i][1]
				if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N && graph[next_x][next_y] === 1 && graph[cur_x][cur_y] === 0){
					goorm[cur_x][cur_y]++
				}
				if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N && visited[next_x][next_y] === false && graph[next_x][next_y] === 0){
					queue.push([next_x, next_y])
					visited[next_x][next_y] = true
				}
			}
		}
	}
	
	for(let i=0;i<N;i++){
		for(let j=0;j<N;j++){
			if(visited[i][j] === false && graph[i][j] === 0)
				bfs(i,j)
		}
	}



	for(let i=0;i<N;i++){
		for(let j=0;j<N;j++){
			if(goorm[i][j] === K){
				result++
			}
		}
	}

	console.log(result)
	
})
