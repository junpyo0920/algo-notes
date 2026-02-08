// [BOJ] 2805 나무 자르기
// https://www.acmicpc.net/problem/2805

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n , m] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...heights);

let minHeight = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let woods = 0;
    for (let i = 0; i < n; i++) {
        if (heights[i] > mid) {
            woods += heights[i] - mid;
        }
    }

    if (woods >= m) {
        minHeight = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(minHeight);