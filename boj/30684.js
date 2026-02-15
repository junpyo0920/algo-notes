// [BOJ] 30684 모르고리즘 회장 정하기
// https://www.acmicpc.net/problem/30684

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const cands = [];

for (let i = 1; i <= n; i++) {
    const name = input[i];

    if (name.length === 3) cands.push(name);
}

console.log(cands.sort()[0]);