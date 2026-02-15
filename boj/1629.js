// [BOJ] 1629 곱셈
// https://www.acmicpc.net/problem/1629

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b, c] = input[0].split(' ').map(BigInt);
a %= c

let ans = BigInt(1);

while (b > BigInt(0)) {
    if (b % BigInt(2) === BigInt(1)) {
        ans = ans * a % c;
    }

    a = a * a % c;
    b /= BigInt(2);
}

console.log(Number(ans));
