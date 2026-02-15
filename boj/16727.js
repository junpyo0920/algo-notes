// [BOJ] 16727 ICPC
// https://www.acmicpc.net/problem/16727

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [p1, e1] = input[0].split(' ').map(Number);
const [e2, p2] = input[1].split(' ').map(Number);

let winner;

if (p1 + p2 > e1 + e2) winner = "Persepolis";
else if (e1 + e2 > p1 + p2) winner = "Esteghlal";
else if (e1 === p2) winner = "Penalty";
else winner = p2 > e1 ? "Persepolis" : "Esteghlal";

console.log(winner);