function solution(numbers) {
    var nums = numbers.sort(function(a,b){return a-b})
    console.log(nums)
    let resultArr = []
    let setArr = new Set()
    for(let i=0, j=0; i<nums.length; j++){
        if(i==j){
            continue;
        }
        if(!resultArr.includes(nums[i]+nums[j])){
            if(nums[j] !== undefined){
                resultArr.push(nums[i] + nums[j])
            }else if(nums[j] == undefined){
                j=0
                i++
        }
        }

    }
    return resultArr.sort((a,b)=>{return a-b})
}