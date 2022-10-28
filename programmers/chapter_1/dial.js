const fs = require('fs');

const str = fs.readFileSync('./dev/stdin').toString();

const padArr = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let answer = 0;

// 2중 for문으로 조짐
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < padArr.length; j++) {
        if (padArr[j].indexOf(str[i]) > -1) {
            // index보다 3 더 크기 때문에 3씩 더해서 answer에 더해 줌
            answer += j + 3;
            continue;
        }
    }
}

console.log(answer);
