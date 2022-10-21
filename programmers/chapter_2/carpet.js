function solution(brown, yellow) {
    const full = brown + yellow;

    for (let width = full - 1; width > 0; width--) {
        // 2로 나누어지지 않으면 continue
        if (full % width !== 0) {
            continue;
        }

        const height = full / width; // 높이
        // 옐로우는 사방으로 브라운에 갇혀 있어야 하므로 위, 아래, 양 옆을 뺀 값을 곱한다
        const y = (width - 2) * (height - 2);
        // 브라운은 전체 값에서 옐로우 칸을 뺀 값이다
        const b = full - y;

        if (y === yellow && b === brown) {
            return [width, height];
        }
    }
}

console.log(solution(10, 2));
