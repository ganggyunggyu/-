function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (str === '(') {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}