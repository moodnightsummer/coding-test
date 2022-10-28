const str = require('fs').readFileSync('dev/stdin', 'utf8').trimEnd();

// 크로아티아 알파벳 경우의 수를 다 담음
const arr = [
    'c=',
    'c-',
    'dz=',
    'd-',
    'lj',
    'nj',
    's=',
    'z=',
];

// 깊은 복사로 원본 손상 안 되게 막음
let strTemp = str.slice('');

// for문을 arr.length 기준으로 돌림
for (let i = 0; i < arr.length; i++) {
    // indexOf로 해당 문자열에서 크로아티아 알파벳이 있는지 확인
    if (strTemp.indexOf(arr[i]) > -1) {
        // 중복되는 값이 있을 수 있으므로 replaceAll로 전체 변경
        strTemp = strTemp.replaceAll(arr[i], '1');
    }
}

// strTemp의 문자열 길이를 반환
console.log(strTemp.length);
