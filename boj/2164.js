const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = +input;
let cards = Array.from({ length: n }, (_, i) => i + 1);

let i = 0;

while (i < cards.length - 1) {
    if (i % 2) cards.push(cards[i]);
    i++;
}

console.log(cards[i]);