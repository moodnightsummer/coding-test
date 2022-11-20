function solution(priorities, location) {
    let answer = 0;

    const temp = priorities.map((a, index) => {
        return [a, index];
    })

    for(let i = 0; i < priorities.length; i++) {
        if(Math.max(...priorities) > temp[i][0]) {
            temp.push(temp.shift());
            priorities.push(priorities.shift());
            i--;
        } else if(Math.max(...priorities) === temp[i][0] && location === temp[i][1]) {
            answer++;
            i--;
            return answer;
        } else {
            temp.shift();
            priorities.shift();
            i--;
            answer++;
        }
    }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));