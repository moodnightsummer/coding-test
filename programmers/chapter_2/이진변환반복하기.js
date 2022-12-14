function solution(s) {
  const answer = [];
  let zero = 0;
  let count = 0;
  while (s !== "1") {
    count += 1;
    zero += s.split("0").length - 1;
    s = s.replaceAll("0", "").length.toString(2); // 2진수 계산
  }
  answer.push(count);
  answer.push(zero);

  return answer;
}
