// [BOJ] 30804 과일 탕후루
// https://www.acmicpc.net/problem/30804

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const fruits = input[1].split(' ').map(Number);
let maxSize = 0;

const counts = Array(10).fill(0);
let kinds = 0;

let left = 0;
for (let right = 0; right < n; right++) {
    const rightFruit = fruits[right];

    if (counts[rightFruit] === 0) kinds++;
    counts[rightFruit]++;

    while (kinds > 2) {
        const leftFruit = fruits[left];
        counts[leftFruit]--;

        if (counts[leftFruit] === 0) kinds--;
        left++;
    }

    maxSize = Math.max(maxSize, right - left + 1);
}

console.log(maxSize);