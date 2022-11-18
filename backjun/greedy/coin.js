// import * as fs from 'fs';
const fs = require('fs');

// 줄바꿈으로 구분
// const input = fs.readFileSync('/Users/martin/workspace/coding-test/backjun/greedy/input1.txt', 'utf8').toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let wallet = input.shift().split(' ')[1];
let coin = 0;
input.pop();
for (let i = input.length - 1; i >= 0; i--) {

    if (wallet >= Number(input[i])) {
        coin += Math.floor(wallet / Number(input[i]));
        wallet %= Number(input[i]);
    }

}

console.log(coin);
