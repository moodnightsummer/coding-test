function solution(n) {
    let answer = 0;
    let x = 0;
    let y = 1;
    for (let i = 2; i <= n; i++){
    
        // 피보나치 수는 언어가 표현할 수 있는 자릿수를 넘어가 오버 플로우를 발생한다.
        // 따라서 (x+y) % 1234567로는 원하는 값을 얻을 수 없어 수식을 변경했다.
        // (x+y) % 1234567 === ((x%1234567) + (y%1234567)) % 1234567
        answer = ((x%1234567)+(y%1234567))%1234567;
        x = y;
        y = answer;
    }

    return answer;
}

const test = solution(1500);
console.log(test);