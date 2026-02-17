// [BOJ] 5220 Error Detection
// https://www.acmicpc.net/problem/5220

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let tc = 1; tc <= +input[0]; tc++) {
    const [num, check] = input[tc].split(' ').map(Number);
    const ones = [...num.toString(2)].reduce((acc, cur) => acc + +cur, 0);

    console.log(ones % 2 === check ? "Valid" : "Corrupt");
}