const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');

const [N, M] = lines[0].split(' ').map(e => +e);
const board = lines.slice(1);

let min = 32;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        const startColors = ['W', 'B'];

        for (const startColor of startColors) {
            min = Math.min(min, getSwitchCount([i, j], startColor));
        }
        
    }
}

console.log(min);

function getSwitchCount(startPosition, startColor) {
    let count = 0;

    for (let row = startPosition[0]; row < startPosition[0] + 8; row++) {
        const rowStart = row % 2 ?
            startColor === 'W' ? 'B' : 'W' :
            startColor === 'W' ? 'W' : 'B';
        
        for (let col = startPosition[1]; col < startPosition[1] + 8; col++) {
            const current = board[row][col];
            const isCorrectColor = col % 2 ? rowStart !== current : rowStart === current;

            if (!isCorrectColor) count++;
            if (count >= min) return min;
        }
    }

    return count;
}