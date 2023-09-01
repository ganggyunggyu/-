const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
rl.on('line', (line) => {
	input = line;
	rl.close();
});

rl.on('close', () => {

	const [W, R] = input.split(' ').map(Number)

	
	const result = W * (1+ (R / 30))
	
	console.log(Math.floor(result))
})
