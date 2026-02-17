// [BOJ] 25191 치킨댄스를 추는 곰곰이를 본 임스
// https://www.acmicpc.net/problem/25191

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const [a, b] = input[1].split(' ').map(Number);

console.log(Math.min(n, ~~(a / 2) + b));