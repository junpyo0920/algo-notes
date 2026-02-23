// [BOJ] 16928 뱀과 사다리 게임
// https://www.acmicpc.net/problem/16928

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const ladderMap = new Map();
const snakeMap = new Map();

input.slice(1).forEach((v, i) => {
    const [from, to] = v.split(' ').map(Number);

    if (i < n) return ladderMap.set(from, to);
    return snakeMap.set(from, to);
});

const dist = Array(101).fill(Infinity);

let queue = [1];
let head = 0;

dist[1] = 0;

while (head < queue.length) {
    const cur = queue[head++];
    const curDist = dist[cur];

    for (let dice = 1; dice <= 6; dice++) {
        let next = cur + dice;

        if (next > 100) continue;

        if (ladderMap.has(next)) next = ladderMap.get(next);
        else if (snakeMap.has(next)) next = snakeMap.get(next);

        if (dist[next] === Infinity) {
            dist[next] = curDist + 1;
            queue.push(next);
        }
    }
}

console.log(dist[100]);
