const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n').map(e => +e);
const tc = lines[0];

const dp = [null, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9]

function getP(n) {
    if (dp[n]) return dp[n];

    dp[n] = getP(n - 1) + getP(n - 5);
    return dp[n];
}

for (let i = 1; i <= tc; i++) {
    console.log(getP(lines[i]));
}
