function solution(left, right) {
  const arr = [];
  let answer = 0;

  for (left; left <= right; left++) {
    const temp = new Set();
    for (let i = 1; i < left; i++) {
      if (left % i === 0) {
        temp.add(i);
        temp.add(left / i);
      }
    }
    const newArr = Array.from(temp);
    if (newArr.length > 1) {
      answer += newArr.length % 2 === 0 ? left : -left;
    } else {
      answer -= left;
    }
  }
  return answer;
}
