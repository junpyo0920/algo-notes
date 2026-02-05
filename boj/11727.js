// [BOJ] 11727 2×n 타일링 2
// https://www.acmicpc.net/problem/11727

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

let i = 3;

while (i <= n) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10_007;
    i++;
}

console.log(dp[n]);
