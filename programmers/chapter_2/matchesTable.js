function solution(n, a, b) {

    let answer = 0;
    // 값이 동일해질 때 매칭되는 것이므로 값을 나누고 거기에 나머지를 더해 값을 확인한다.
    while (true) {
        a = Math.floor(a / 2) + a % 2;
        b = Math.floor(b / 2) + b % 2;
        answer++;
        // 값이 같아지는 순간 break문으로 종료한다.
        if (a === b) {
            break;
        }
    }
    // 값을 리턴.
    return answer;
}

console.log(solution(8, 1, 2));
