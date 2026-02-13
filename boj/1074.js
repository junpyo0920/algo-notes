// [BOJ] 1074 Z
// https://www.acmicpc.net/problem/1074

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, r, c] = input[0].split(' ').map(Number);

let ans = 0;

while (n > 0) {
    const half = 2 ** (n - 1);

    if (c >= half && r < half) {
        ans += half * half;
    }

    if (c < half && r >= half) {
        ans += half * half * 2;
    }

    if (c >= half && r >= half) {
        ans += half * half * 3;
    }

    c -= c >= half ? half : 0;
    r -= r >= half ? half : 0;

    n--;
}

console.log(ans);
