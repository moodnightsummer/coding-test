// 줄바꿈으로 구분
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const len = input.shift();

let answer = len;

// 2중 for문으로 조짐
for (let i = 0; i < len; i++) {
    let x = 0;
    // for문 안에서 해당 값들을 돌며 input[i][j]의 단어 하나를 찾아 바로 뒤가 아니면 x 값을 올림
    for (let j = 0; j < input[i].length; j++) {
        const temp = input[i].slice(j + 1);
        if (temp.indexOf(input[i][j]) > 0) {
            x++;
            continue;
        }
    }
    // x가 0보다 크면 그룹 단어가 아니므로 answer-- 처리
    if (x > 0) {
        answer--;
    }
}

console.log(answer);
