// [BOJ] 24544 카카오뷰 큐레이팅 효용성 분석
// https://www.acmicpc.net/problem/24544

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const interests = input[1].split(' ').map(Number);
const myViews = input[2].split(' ').map(Number);

let total = 0;
let not = 0;

for (let i = 0; i < n; i++){
    total += interests[i];
    not += myViews[i] ? 0 : interests[i];
}

console.log(total);
console.log(not);
