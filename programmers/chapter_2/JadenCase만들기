function solution(s) {
    let answer = '';
    
    const arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === ' ') {
            answer += ' ';
            continue;
        }
        answer += typeof arr[i].slice(0, 1) === Number ? arr[i].slice(0, 1):arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
        if(i !== arr.length-1) {
            answer += ' ';
        }
    }
    return answer;
}

const test = solution("3people    unFollowed me");
console.log(test);