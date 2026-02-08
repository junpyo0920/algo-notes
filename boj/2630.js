// [BOJ] 2630 색종이 만들기
// https://www.acmicpc.net/problem/2630

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const mat = input.slice(1).map(row => row.split(' ').map(e => +e));

const ret = [0, 0];

search(n, 0, 0);

ret.forEach(e => console.log(e));

function search(size, sy, sx) {
    const filled = mat[sy][sx];

    for (let row = sy; row < sy + size; row++) {
        for (let col = sx; col < sx + size; col++) {
            if (filled !== mat[row][col]) {
                const half = size / 2;

                search(half, sy, sx);
                search(half, sy, sx + half);
                search(half, sy + half, sx);
                search(half, sy + half, sx + half);

                return;
            }
        }
    }

    ret[filled]++;
}