const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.trim());
	//실제로 데이터는 주어진 N+2줄 입력이 되고, input의 길이가 N+2만큼 되면 close를 호출한다.
	if (input.length === Number(input[0]) + 1){
		rl.close();
	}
});

rl.on('close', () => {
	const nums = []
	let result = 0
	const T = input.shift()
	const data = input.map(el=>el.split(' ').join(''))
	for(let i=0; i<data.length; i++){
		let cnt = 1
		let num1 = ''
		let cal = ''
		let num2 = ''
		
		for(let j=0; j<data[i].length; j++){
			if(cnt === 1 && !isNaN(data[i][j])){
				num1 = num1 + data[i][j]	
			}
			if(cnt === 1 && isNaN(data[i][j])){
				cal = data[i][j]
				cnt++
			}
			if(cnt === 2 && !isNaN(data[i][j])){
				num2 = num2 + data[i][j]
			}

		}
		if(cal === '+'){
			nums.push((+num1) + (+num2))
		}
		if(cal === '-'){
			nums.push((+num1) - (+num2))
		}
		if(cal === '/'){
			nums.push(Math.floor((+num1) / (+num2)))
		}
		if(cal === '*'){
			nums.push((+num1) * (+num2))
		}
	}
	for(const num of nums){
		result = result + num
	}
	console.log(result)
})
