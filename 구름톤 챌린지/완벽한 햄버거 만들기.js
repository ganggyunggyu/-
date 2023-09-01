// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = []
	for await (const line of rl) {
		input.push(line.trim())
		if(input.length === 2){
					rl.close();
		}
	}
	
	const stuffs = input[1].split(' ').map(el=>+el)


	const maxStuff = Math.max(...stuffs)
	
	const arr1 = []
	const arr2 = []
	let bool1 = true
	let bool2 = true
	let cnt = 0
	
	for(const stuff of stuffs){
		if(cnt === 0 && stuff == maxStuff){
			cnt++
			continue
		}
		if(cnt == 0){
			arr1.push(stuff)
		}

		if(cnt == 1){
			arr2.push(stuff)
		}
	}


	for(let i=0; i<arr1.length; i++){
		if(arr1[i] > arr1[i+1]){

			bool1 = false
			break;
		}
	}
		for(let i=0; i<arr2.length; i++){
			if(arr2[i] < arr2[i+1]){
				bool2 = false
				break;
			}
	}

	if(bool1 && bool2){
		let sum = 0;
		for(let i=0; i<stuffs.length; i++){
			sum = sum + stuffs[i]
		}
		console.log(sum)
	}
	if(!bool1 || !bool2){
		console.log(0)
	}
	

	
	process.exit();
})();
