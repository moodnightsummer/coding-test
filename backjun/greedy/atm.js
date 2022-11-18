import * as fs from 'fs';
const fs = require('fs');

// 줄바꿈으로 구분
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const array = input[1].split(' ');

let sum = 0;
let answer = 0;

array.sort((a, b) => a - b);

for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
    answer += sum;
}

console.log(answer);
