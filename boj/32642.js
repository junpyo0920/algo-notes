// [BOJ] 32642 당구 좀 치자 제발
// https://www.acmicpc.net/problem/32642

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const acc = input[1]
    .split(' ')
    .map(Number)
    .reduce(([accAnger, curAnger], w) => {
        curAnger -= w ? -1 : 1;
        accAnger += curAnger;
        return [accAnger, curAnger];
    }, [0, 0])

console.log(acc[0]);