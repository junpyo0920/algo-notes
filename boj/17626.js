// [BOJ] 17626 Four Squares
// https://www.acmicpc.net/problem/17626

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const dp = [-1, 1];

for (let i = 2; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
        dp[i] = 1;
        continue;
    }

    let min = 5;

    for (let j = 1; j * j <= i; j++) {
        min = Math.min(min, 1 + dp[i - j * j]);
    }

    dp[i] = min;
}

console.log(dp[n]);
