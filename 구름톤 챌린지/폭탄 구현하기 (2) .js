const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let matrix = [];
let N, M;

rl.on('line', (line) => {
    input.push(line.trim());
    if (input.length === N+1) {
        rl.close();
    }
	
});
rl.on('close', () => {

	const [N, K] = input.shift().split(' ').map(Number)

	const graph = []
	
	for(let i=0; i<N; i++){
		graph.push(input.shift().split(' '))
	}
	
	const bombs = input.map((el)=>el.split(' ').map(Number))

	const bombGraph = Array.from({length : N}, ()=>Array.from({length : N},()=>0))

	const dirs = [[-1, 0],[1, 0],[0,-1],[0, 1]]
	
	const isbomb = (x, y) => {
		if(graph[x][y] === '@'){
				 bombGraph[x][y] = bombGraph[x][y] + 2 
		}
		if(graph[x][y] === '0'){
				bombGraph[x][y] = bombGraph[x][y] + 1
		}
		for(const dir of dirs){
			const next_x = x+dir[0]
			const next_y = y+dir[1]
			if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N){
				if(graph[next_x][next_y] === '@'){
					 bombGraph[next_x][next_y] = bombGraph[next_x][next_y] + 2 
				}
				if(graph[next_x][next_y] === '0'){
					bombGraph[next_x][next_y] = bombGraph[next_x][next_y] + 1
				}
			}
		}
	}
	
	for(const bomb of bombs){
		isbomb(bomb[0]-1,bomb[1]-1)
	}

	
	console.log(Math.max(...bombGraph.flat()))

})
