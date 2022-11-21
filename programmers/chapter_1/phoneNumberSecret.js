function solution(phone_number) {
    let answer = '';
    for (let i = 0; i < phone_number.length; i++) {
        if (i < phone_number.length - 4) {
            answer += '*';
        } else {
            answer += phone_number[i];
        }
    }

    return answer;
}

function solution2(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution2('010222212120'));
