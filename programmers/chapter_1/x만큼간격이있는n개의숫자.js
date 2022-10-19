// for문으로 temp에 값 누적하면서 배열에 push
function solution(x, n) {
  let answer = [];
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += x;
    answer.push(temp);
  }
  return answer;
}

console.log(solution(-4, 13));
