// [BOJ] 5525 IOIOI
// https://www.acmicpc.net/problem/5525

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const s = Number(input[1]);

const lengthP = n * 2 + 1;

let countP = 0;

for (let i = 0; i <= s - lengthP; i++) {
    const sliced = input[2].slice(i, i + lengthP);

    let isP = true;
    for (let j = 0; j < lengthP; j++) {
        isP = j % 2 ? sliced[j] === 'O' : sliced[j] === 'I';
        if (!isP) break;
    }

    if (isP) countP++;
}

console.log(countP);
