function solution(n, words) {
    // 처음 제출하는 사람은 무조건 통과이기 때문에 2로 초기화
    let count = 2;
    // 판수 측정을 위한 변수
    let pan = 1;

    for (let i = 0; i < words.length; i++) {
    // i가 마지막 값이면 더 이상 해 줄 필요가 없으므로 [0, 0]을 리턴
        if (i === words.length - 1) {
            return [0, 0];
        }

        // 이전 값
        const one = [...words[i]];
        // 이후 값
        const two = [...words[i + 1]];

        // index는 0부터 시작하므로 +1을 해 주어 명수로 나머지가 없으면 판수와 제출하는 사람의 순서를 변경
        if ((i + 1) % n === 0) {
            pan++;
            count = 1;
        }

        // 이전 값의 맨 끝 알파벳과 이후 값의 첫 번째 알파벳이 다르거나 기존의 words 배열에 나왔던 값이면 탈락자 색출
        if (
            one[one.length - 1] !== two[0]
      || words.indexOf(words[i + 1]) !== i + 1
        ) {
            return [count, pan];
        }

        // 탈락자 없을 시 제출하는 사람의 순서 변경
        count++;
    }
}

function solution2(n, words) {
    let answer = 0;

    words.reduce((prev, now, idx) => {
        // Boolean(0)은 false이고,
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);

        // prev에 현재 단어의 마지막 알파벳으로 초기화
        return now[now.length - 1];
    }, '');

    return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
}

console.log(
    solution2(2,	['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
);
