const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let N;

rl.on('line', (line) => {
	input.push(line)
	
	if(N === undefined){
			N = line
	}
	if(!N === undefined){
      if(input.length === N + 1){
        rl.close();	
    }
      
	}
	
});

rl.on('close', () => {
	input.shift()
	let [T, M] = input.shift().split(' ').map(Number)
	const workTimes = input.map(Number)

	for(const work of workTimes){
		M = M + work
	}

	T = T + Math.floor(M / 60)
	if(T >= 24){
		console.log((T % 24), (M % 60))
	}
	if(T < 24){

		console.log(T, (M % 60))
	}
	

})
