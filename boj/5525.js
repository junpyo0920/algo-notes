// [BOJ] 5525 IOIOI
// https://www.acmicpc.net/problem/5525

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const s = Number(input[1]);
const str = input[2];

const lengthP = n * 2 + 1;

let countP = 0;

let start = 0;
while (start <= s - lengthP) {
    let isP = true;

    let end = start;
    while (end < start + lengthP) {
        isP = (end - start) % 2 ? str[end] === 'O' : str[end] === 'I';

        if (!isP) {
            start = start === end ? start + 1 : end;
            break;
        }

        end++;
    }

    if (!isP) continue;

    countP++;
    start += 2;
}

console.log(countP);
