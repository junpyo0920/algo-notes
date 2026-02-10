// [BOJ] 21736 헌내기는 친구가 필요해
// https://www.acmicpc.net/problem/21736

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let startPos = [-1, -1];

const mat = Array.from({ length: n }, (_, indexRow) => {
    const row = input[indexRow + 1].trim().split('');
    
    const indexI = row.indexOf('I');
    if (indexI !== -1) startPos = [indexRow, indexI];

    return row;
})

const visited = Array.from({ length: n }, () => Array(m).fill(false));

const queue = [startPos];
let head = 0;
visited[startPos[0]][startPos[1]] = true;

const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];

let friends = 0;

while(head < queue.length) {
    const [cy, cx] = queue[head++];

    for (const [dy, dx] of d) {
        const [ny, nx] = [cy + dy, cx + dx];

        if (n <= ny || ny < 0 || m <= nx || nx < 0) continue;

        if (mat[ny][nx] !== 'X' && !visited[ny][nx]) {
            queue.push([ny, nx]);
            visited[ny][nx] = true;
            if (mat[ny][nx] === 'P') friends++;
        }
    }
}

console.log(friends || 'TT');
