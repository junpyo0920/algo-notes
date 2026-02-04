// [BOJ] 1012 유기농 배추
// https://www.acmicpc.net/problem/1012

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

let tc = 1;
let firstLine = tc;
while (tc <= t) {
    const [m, n, k] = input[firstLine].split(' ').map(e => +e);

    const mat = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 1; i <= k; i++) {
        const [x, y] = input[firstLine + i].split(' ').map(e => +e);
        mat[y][x] = 1;
    }

    let answer = 0;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    function bfs(x, y) {
        const dx = [0, 1, 0, -1];
        const dy = [-1, 0, 1, 0];

        const queue = [[x, y]];
        visited[y][x] = true;

        while (queue.length) {
            const [cx, cy] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];

                if (n <= ny || ny < 0 || m <= nx || nx < 0) continue;
                if (!mat[ny][nx] || visited[ny][nx]) continue;

                visited[ny][nx] = true;
                queue.push([nx, ny]);
            }
        }
    }

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (mat[y][x] && !visited[y][x]) {
                bfs(x, y);
                answer++;
            }
        }
    }

    console.log(answer);

    tc++;
    firstLine += k + 1;
}