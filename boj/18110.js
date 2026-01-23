const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const lines = input.split('\n').map(Number);

function getAnswer(n, arr) {
    if (n === 0) return 0;

    const noCount = Math.round(lines[0] * 0.15);

    const sorted = [...arr].sort((a, b) => a - b);
    const actualScores = sorted.slice(noCount, arr.length - noCount);
    const sum = actualScores.reduce((acc, cur) => acc + cur);

    return Math.round(sum / (actualScores.length));
}

const answer = getAnswer(lines[0], lines.slice(1));

console.log(answer);
