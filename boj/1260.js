// [BOJ] 1260 DFS와 BFS
// https://www.acmicpc.net/problem/1260

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, v] = input[0].split(' ').map(e => +e);

const mat = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
let visited;

for (let i = 1; i <= m; i++) {
    const [from, to] = input[i].split(' ').map(e => +e);
    mat[from][to] = 1;
    mat[to][from] = 1;
}

console.log(dfs(v));
console.log(bfs(v));

function bfs(s) {
    visited = Array(n + 1).fill(false);

    const queue = [s];
    visited[s] = true;

    let visitOrder = ''+s;

    while (queue.length) {
        const cur = queue.shift();

        for (let j = 0; j < n + 1; j++) {
            const next = mat[cur][j];

            if (!next || visited[j]) continue;

            queue.push(j);
            visited[j] = true;
            visitOrder += ' ' + j;
        }
    }

    return visitOrder;
}

function dfs(s) {
    visited = Array(n + 1).fill(false);

    const stack = [s];
    let visitOrder = ''

    while (stack.length) {
        const cur = stack.pop();

        if (!visited[cur]) {
            visited[cur] = true;
            visitOrder += (visitOrder === '' ? '' : ' ') + cur;

            for (let j = n; j > 0; j--) {
                const next = mat[cur][j];
                if (!next || visited[j]) continue;

                stack.push(j);
            }
        }
    }

    return visitOrder;
}
