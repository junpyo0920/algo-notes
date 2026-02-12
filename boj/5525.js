// [BOJ] 5525 IOIOI
// https://www.acmicpc.net/problem/5525

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const s = Number(input[1]);
const str = input[2];

let countPattern = 0;
let countPn = 0;

for (let i = 1; i < s - 1; i++) {
    if (str[i - 1] === "I" && str[i] === "O" && str[i + 1] === "I") {
        countPattern++;
        i++;

        if (countPattern >= n) countPn++;

        continue;
    }

    countPattern = 0;
}

console.log(countPn);