// [BOJ] 1389 케빈 베이컨의 6단계 법칙
// https://www.acmicpc.net/problem/1389

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const mat = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    mat[a][b] = 1;
    mat[b][a] = 1;
}

let smallestKB = Infinity;
let kevinBacon = 0;

for (let i = 1; i <= n; i++) {
    const kb = getKB(i);

    if (smallestKB > kb) {
        smallestKB = kb;
        kevinBacon = i;
    }
}

console.log(kevinBacon);

function getKB(start) {
    const queue = [[start, 0]];
    let head = 0;

    const visited = Array(n + 1).fill(false);
    visited[start] = true;

    let kbs = 0;

    while(head < queue.length) {
        const [curN, curD] = queue[head++];

        for (let next = 1; next <= n; next++) {
            if (mat[curN][next] && !visited[next]) {
                visited[next] = true;
                kbs += curD + 1;
                queue.push([next, curD + 1]);
            }
        }
    }

    return kbs;
}