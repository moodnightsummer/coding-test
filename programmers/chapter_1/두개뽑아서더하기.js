function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (!(j === i)) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }

  let array = Array.from(set);
  array = array.sort((a, b) => a - b);
  console.log(array);

  return array;
}

solution([2, 1, 3, 4, 1]);
