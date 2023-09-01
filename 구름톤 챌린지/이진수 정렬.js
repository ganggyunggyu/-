const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input=[]

rl.on('line', (line) => {
	
	input.push(line)
	
	if(input.length === 2){
	rl.close();	
	}
	
});

rl.on('close', () => {
	const [N, K] = input.shift().split(' ').map(Number)

	const nums = input.join('').split(' ').map(Number)
	const binNums = []
	
	for(const num of nums){
		binNums.push(num.toString(2))
	}
	
	const isBin = (bin) => {
		let cnt = 0
		for(let i=0; i<bin.length; i++){
			if(bin[i] === '1'){
				cnt++
			}
		}
		return cnt
	}

	binNums.sort((a,b)=>{
		if(isBin(a) === isBin(b)){
			a = parseInt(a, 2)
			b = parseInt(b, 2)
			return b - a
		}
		a = isBin(a)
		b = isBin(b)
		return b - a
	})

	
	console.log(parseInt(binNums[K-1], 2))
})



