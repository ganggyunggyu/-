function solution(board, moves) {
    const stack = []
    let count = 0
    
    const boom = (arr) => {
        for(let i=0; i<arr.length; i++){
            if(arr[i+1] === undefined){
                break;
            }else{
                if(arr[i] === arr[i+1]){
                    arr.pop()
                    arr.pop()
                    count = count + 2
                }
            }
        }
    }
    
    const peek = () => {
        for(let i=0; i<moves.length; i++){
            for(let j=0; j<board.length; j++){
                if(board[j][moves[i]-1] !== 0){
                    stack.push(board[j][moves[i]-1])
                    boom(stack)
                    board[j][moves[i]-1] = 0
                    break;
                }else{
                    continue;
                }
            }
        }
        console.log(stack)
        console.log(board)
    }
    

    
    peek()
    return count
}