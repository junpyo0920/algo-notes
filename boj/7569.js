// [BOJ] 7569 토마토
// https://www.acmicpc.net/problem/7569

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n, h] = input[0].split(' ').map(Number);

const queue = [];
let head = 0;

const box = Array.from({ length: h }, (_, heightI) => {
    return Array.from({ length: n }, (_, rowI) => {
        return input[heightI * n + rowI + 1].split(' ').map((v, colI) => {
            const numV = Number(v);

            if (numV === 1) queue.push([heightI, rowI, colI, 1]);

            return numV
        });
    });
})

const dz = [1, -1];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

while (head < queue.length) {
    const [cz, cy, cx, count] = queue[head++];

    for (let i = 0; i < 4; i++) {
        const ny = cy + dy[i];
        const nx = cx + dx[i];

        if (n <= ny || ny < 0 || m <= nx || nx < 0) continue;

        if (box[cz][ny][nx] === 0) {
            box[cz][ny][nx] = count + 1;
            queue.push([cz, ny, nx, count + 1]);
        }
    }

    for (let i = 0; i < 2; i++) {
        const nz = cz + dz[i];

        if (h <= nz || nz < 0) continue;

        if (box[nz][cy][cx] === 0) {
            box[nz][cy][cx] = count + 1;
            queue.push([nz, cy, cx, count + 1])
        }
    }
}

let maxDays = -1;

topLoop: for (let z = 0; z < h; z++) {
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            const days = box[z][y][x];

            if (days === 0) {
                maxDays = -1;
                break topLoop;
            }

            if (days - 1 > maxDays) maxDays = days - 1;
        }
    }
}

console.log(maxDays);
