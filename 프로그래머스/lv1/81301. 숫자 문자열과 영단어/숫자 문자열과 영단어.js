function solution(s) {
    let result = ''
    const obj = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine'
    }
    for(const key in obj){
        if(s.includes(obj[key])){
            s = s.replaceAll(obj[key], key)
        }
    }
    return +s
}