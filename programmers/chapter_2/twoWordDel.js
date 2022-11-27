function solution(s) {
  const arr = s.split("");
  const queue = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (queue[queue.length - 1] === arr[i]) {
      queue.pop();
    } else {
      queue.push(arr[i]);
    }
  }

  return queue.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
