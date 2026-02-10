// [BOJ] 1697 숨바꼭질
// https://www.acmicpc.net/problem/1697

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const visited = Array(100_000 + 1).fill(0);

const queue = [n];
let head = 0;

while (head < queue.length) {
    const x = queue[head++];

    if (x === k) break;

    function move(next) {
        if (100_001 < next || next < 0) return;
        if (visited[next]) return;

        visited[next] = visited[x] + 1;
        queue.push(next);
    }

    move(x - 1);
    move(x + 1);
    move(x * 2);
}

console.log(visited[k]);
