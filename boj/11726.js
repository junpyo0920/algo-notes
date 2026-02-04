// [BOJ] 11726 2×n 타일링
// https://www.acmicpc.net/problem/11726

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const dp = Array(n + 1).fill(null);
dp[1] = 1;
dp[2] = 2;

console.log(cases(n));

function cases(n) {
    if (dp[n] !== null) return dp[n];

    dp[n] = (cases(n - 1) + cases(n - 2)) % 10007;
    return dp[n];
}