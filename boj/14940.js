// [BOJ] 14940 쉬운 최단거리
// https://www.acmicpc.net/problem/14940

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let start;

const mat = Array.from({ length: n }, (_, i) => {
    const row = input[i + 1]
        .split(' ')
        .map(Number)
        .map((e) => e === 1 ? -1 : e);

    const indexOfStart = row.indexOf(2);
    if (indexOfStart !== -1) start = [i, indexOfStart];
    
    return row;
})

if (start === undefined) {
    console.error('Cannot find start');
    process.exit(0);
}

mutateMat(start[0], start[1]);

console.log(mat.map((row) => row.join(' ')).join('\n'));

function mutateMat(sy, sx) {
    mat[sy][sx] = 0;

    const queue = [[sy, sx]];
    let head = 0;

    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];

    while (head < queue.length) {
        const [cy, cx] = queue[head++];

        for (let i = 0; i < 4; i++) {
            const ny = cy + dy[i];
            const nx = cx + dx[i];

            if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;

            if (mat[ny][nx] === -1) {
                mat[ny][nx] = mat[cy][cx] + 1;
                queue.push([ny, nx]);
            }
        }
    }
}
