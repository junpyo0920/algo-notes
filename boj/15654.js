// [BOJ] 15654 N과 M (5)
// https://www.acmicpc.net/problem/15654

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(e => +e);
const items = input[1].split(' ').map(e => +e).sort((a, b) => a - b);

const visited = Array(n).fill(false);
const path = [];
let output = '';

dfs();

console.log(output.trim());

function dfs(depth = 0) {
    if (depth === m) {
        output += path.join(' ') + '\n';
        return;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        visited[i] = true;
        path.push(items[i]);
        dfs(depth + 1);
        path.pop();
        visited[i] = false;
    }
}