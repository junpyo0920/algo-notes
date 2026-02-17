// [BOJ] 15059 Hard choice
// https://www.acmicpc.net/problem/15059

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const avails = input[0].split(' ').map(Number);
const choices = input[1].split(' ').map(Number);

console.log(avails.reduce((acc, avail, i) => acc + Math.max(0, choices[i] - avail), 0));