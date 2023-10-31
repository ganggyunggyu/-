function solution(cacheSize, cities) {
let cache = [];
let result = 0;
let lowCities = cities.map(el => el.toLowerCase())

if(cacheSize == 0){
    return cities.length * 5
}
    
lowCities.forEach((city, i) => {
    if(cache.includes(city)){
        //hit
        cache.splice(cache.indexOf(city), 1);
        cache.push(city);
        result += 1
        return;
    }
    if(cache.length === cacheSize){
        //miss
        cache.shift()
        cache.push(city)
        result += 5
        return;
    }
    cache.push(city);
    result += 5;

})
console.log(cache)
return result;
    
    //["Jeju", "Pangyo", "NewYork", "newyork"]
    //5, 5, 5, 1

    //["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]
    //5, 5, 5, 1, 1, 1, 1, 1, 1
    
    //["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
    // 5, 5, 5, 5, 5, 5, 5, 5, 5, 5

}