const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n').map(e => +e);

if (lines[0] === 1) return console.log(lines[1]);


const dp = Array(lines[0] + 1).fill(0);

dp[1] = lines[1];
dp[2] = lines[1] + lines[2];

for (let i = 3; i <= lines[0]; i++) {
    const nowScore = lines[i];
    const bestScores = Math.max(dp[i - 2], dp[i - 3] + lines[i - 1]);

    dp[i] = bestScores + nowScore;
}

console.log(dp[lines[0]]);
