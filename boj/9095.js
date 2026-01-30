const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n').map(e => +e);
const T = lines[0];

for (let i = 1; i <= T; i++) {
    const answer = dfs(lines[i]);
    console.log(answer);
}

function dfs(n, acc = 0, arr = []) {
    if (acc === n) return 1;
    if (acc > n) return 0;

    let ret = 0;

    for (let i = 1; i <= 3; i++) {
        ret += dfs(n, acc +i, [...arr, i]);
    }

    return ret;
}