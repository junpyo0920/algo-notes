// [BOJ] 11403 경로 찾기
// https://www.acmicpc.net/problem/11403

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const mat = input.slice(1).map(row => row.split(' ').map(Number));

for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][k] && mat[k][j]) {
                mat[i][j] = 1;
            }
        }
    }
}

console.log(mat.map((row) => row.join(' ')).join('\n'));
