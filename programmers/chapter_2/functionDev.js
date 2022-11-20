function solution(progresses, speeds) {
    const answer = [];

    const temp = [];
    for(let i = 0; i < progresses.length; i++) {
        temp.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    let num = temp.shift();
    let index = 0;
    answer.push(1);
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] <= num) {
            answer[index] = answer[index]+1;
            temp.shift();
        } else {
            num = temp.shift();
            answer.push(1);
            index++;
        }
        i--;
    }
    return answer;
}


console.log(solution([93, 30, 55], [1, 30, 5]));