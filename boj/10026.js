// [BOJ] 10026 적록색약
// https://www.acmicpc.net/problem/10026

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const output = [];

for (let rg = 0; rg < 2; rg++) {
    let visited = Array.from({ length: n + 1 }, () => Array(n).fill(false));
    let areaCount = 0;

    for (let y = 1; y <= n; y++) {
        for (let x = 0; x < n; x++) {
            if (visited[y][x]) continue;

            areaCount++;
            visited = bfs(Boolean(rg), y, x, visited);
        }
    }

    output.push(areaCount);
}

console.log(output.join(' '));


function bfs(isRg, sy, sx, visited) {
    const startColor = input[sy][sx];

    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];

    const queue = [[sy, sx]];
    visited[sy][sx] = true;
    let head = 0;

    while (head < queue.length) {
        const [cy, cx] = queue[head++];

        for (let i = 0; i < 4; i++) {
            const [ny, nx] = [cy + dy[i], cx + dx[i]];

            if (ny > n || ny < 1 || nx >= n || nx < 0) continue;

            const diffArea = !isSameArea(startColor, ny, nx, isRg);
            if (diffArea || visited[ny][nx]) continue;

            visited[ny][nx] = true;
            queue.push([ny,nx]);
        }
    }

    return visited;
}

function isSameArea(color, y, x, isRg) {
    if (isRg && color !== 'B') return input[y][x] !== 'B';

    return input[y][x] === color;
}