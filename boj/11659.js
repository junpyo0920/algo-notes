// [BOJ] 11659 구간 합 구하기 4
// https://www.acmicpc.net/problem/11659

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');

const [N, M] = lines[0].split(' ').map(e => +e);
const arr = lines[1].split(' ').map(e => +e);

const dp = arr.reduce((acc, cur, i) => {
    acc[i] = (acc[i - 1] || 0) + cur;
    return acc;
}, Array(N));

for (let i = 2; i <= M + 1; i++) {
    const [s, e] = lines[i].split(' ').map(e => +e - 1);

    console.log(dp[e] - (dp[s - 1] || 0));
}
