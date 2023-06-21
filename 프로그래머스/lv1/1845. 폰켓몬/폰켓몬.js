function solution(nums) {
    let canSelect = nums.length/2
    let pokemon = new Set([...nums]).size
    if(pokemon >= canSelect){
        return canSelect;
    }else{
        return pokemon;
    }
}