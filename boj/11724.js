// [BOJ] 11724 연결 요소의 개수
// https://www.acmicpc.net/problem/11724

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

if (m === 0) {
    console.log(n);
    process.exit(0);
}

const mat = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const visited = Array(n + 1).fill(false);

for (let i = 1; i <= m; i++) {
    const [u, v] = input[i].split(' ').map(Number);

    mat[u][v] = 1;
    mat[v][u] = 1;
}

let connectedCount = 0;

for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
        bfs(i);
        connectedCount++;
    }
}

console.log(connectedCount);

function bfs(s) {
    const queue = [s];
    let head = 0;
    visited[s] = true;

    while (head < queue.length) {
        const cur = queue[head++];

        for (let next = 1; next <= n; next++) {
            if (mat[cur][next] === 1 && !visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
}