function solution(record) {
    const result = []
    const map = new Map()
    
    for(let el of record){
        const [order, uid, nickName] = el.split(' ')
        if(order === 'Leave'){
            result.push(uid+ '님이 나갔습니다.')
            continue
        }
        if(order === 'Enter'){
            result.push(uid+ '님이 들어왔습니다.')
        }
        map.set(uid, nickName)
    }
        for (let i = 0; i < result.length; i++) {
        const [uid] = result[i].split('님이')
        const nickName = map.get(uid)
        if (nickName) {
            result[i] = result[i].replace(uid, nickName)
        }
    }
    return result
}