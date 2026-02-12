// [BOJ] 2667 단지번호붙이기
// https://www.acmicpc.net/problem/2667

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const mat = Array.from({ length: n }, (_, i) => input[i + 1].split('').map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let villages = 0;
const housesCount = [];

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (mat[y][x] && !visited[y][x]) {
            villages++;
            housesCount.push(visit(y, x));
        }
    }
}

console.log(villages);
console.log(housesCount.sort((a, b) => a - b).join('\n'));

function visit(sy, sx) {
    let houses = 0;

    const queue = [[sy, sx]];
    let head = 0;

    visited[sy][sx] = true;
    houses++;

    while(head < queue.length) {
        const [cy, cx] = queue[head++];

        for (let i = 0; i < 4; i++) {
            const [ny, nx] = [cy + dy[i], cx + dx[i]];

            if (n <= ny || ny < 0 || n <= nx || nx < 0) continue;

            if (mat[ny][nx] && !visited[ny][nx]) {
                houses++;
                visited[ny][nx] = true;
                queue.push([ny, nx]);
            }
        }
    }

    return houses;
}