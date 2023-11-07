function solution(s) {
    const firstUp = (str) => {
        if(str!==''){
            str = str.toLowerCase().split('')
            str[0] = str[0].toUpperCase()
        
            return str.join('')
        }
        return str
    }

    
    console.log(firstUp(''))
    console.log(firstUp('AABBCC'))
    console.log(firstUp('3AAbbCC'))
    
    const a = s.split(' ').map(el=>firstUp(el)).join(' ')
    
  
    //[for, the, last, week]
    //[For, The, Last, Week]

    return a
}