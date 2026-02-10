// [BOJ] 18111 마인크래프트
// https://www.acmicpc.net/problem/18111

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, b] = input[0].split(' ').map(Number);
const mat = Array.from({ length: n }, (_, i) => input[i + 1].split(' ').map(Number));

let [minT, maxH] = [Infinity, 0];

for (let targetH = 0; targetH <= 256; targetH++) {
    let requireB = 0;
    let t = 0;

    rowLoop: for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (t > minT) break rowLoop;

            const currentH = mat[row][col]

            if (currentH < targetH) {
                requireB += targetH - mat[row][col];
                t += targetH - mat[row][col];

                continue;
            }

            if (currentH > targetH) {
                requireB -= currentH - targetH;
                t += (currentH - targetH) * 2;
            }
        }
    }

    if (requireB <= b && t <= minT) {
        minT = t;
        maxH = targetH;
    }
}

console.log(minT, maxH);