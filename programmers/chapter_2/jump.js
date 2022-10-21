function solution(n) {

    let answer = 0; // 사용 배터리
    let temp = n;

    while (true) {
        // 위로 빼 준 이유는 n = 1일 경우 Math.floor(1/2) = 0이 되기 때문에 while문 통과를 하지 않음
        if (temp === 1) {
            answer++; // 마지막에 1만 남으면 무조건 점프를 뛰어야 하기 때문에 처리
            break;
        }

        // 나머지 더 해 주는 이유 : 홀수일 때 한 칸 점프를 뛰고 짝수일 때 순간이동
        answer += temp % 2;
        temp = Math.floor(temp / 2);
    }

    return answer;
}

console.log(solution(1));
