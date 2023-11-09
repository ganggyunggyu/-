function solution(queue1, queue2) {
  class Node {
    constructor(el) {
      this.el = el;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.size = 0;
      this.tail = null;
      this.sum = 0;
    }

    push(el) {
      const node = new Node(el);
      if (!this.size) {
        //첫번째로 들어오는 el을 처리
        this.head = node;
        this.tail = node;
      } else {
        //그 다음으로 들어오는 el을 처리
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
      this.sum += this.tail.el;
    }

    pop() {
      if (!this.size) return false;
      const ret = this.head;
      this.head = this.head.next;
      this.size--;
      this.sum -= ret.el;
      return ret.el;
    }
  }

  const q1 = new Queue();
  const q2 = new Queue();

  for (const el of queue1) q1.push(el);
  for (const el of queue2) q2.push(el);
  console.log('q1 : ', q1);
  console.log('q2 : ', q2);
    
  const targetNum = (q1.sum + q2.sum) / 2;
  console.log('targetNum : ', targetNum);

  let result = 0;
  for (let i = 0; i < (q1.size + q2.size) * 2; i++) {
      
    if (q1.sum === targetNum) return result;
      
    if (q1.sum > q2.sum) q2.push(q1.pop());
    //q2의 합이 작으면 q1의 첫번째 요소를 push
      
    else q1.push(q2.pop());
    //위와 반대
    result++;
  }
  return -1;
}

