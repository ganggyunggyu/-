function solution(sizes) {
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){  //가로 세로 비교
            let 가로길이 = sizes[i][0]
            sizes[i][0] = sizes[i][1]
            sizes[i][1] = 가로길이
        }
    }

    sizes.sort((a,b)=>{
        a = a[0]
        b = b[0]
        return b-a
    })
    let max가로 = sizes[0][0]
    sizes.sort((a,b)=>{
        a = a[1]           
        b = b[1]
        return b-a
    })
    let max세로 = sizes[0][1]
    return max가로 * max세로
}