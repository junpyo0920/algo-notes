// [BOJ] 11053 가장 긴 증가하는 부분 수열
// https://www.acmicpc.net/problem/11053

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const lenArr = Array(n).fill(1);
let ans = 1;

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) continue;

        lenArr[i] = Math.max(lenArr[i], lenArr[j] + 1);
        if (lenArr[i] > ans) ans = lenArr[i];
    }
}

console.log(ans);
console.log(lenArr)
