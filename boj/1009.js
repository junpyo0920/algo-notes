const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');

const T = +lines[0];

for (let i = 1; i <= T; i++) {
    const [a, b] = lines[i].split(' ').map(e => +e);

    let last = a;
    for (let j = 1; j < b; j++) {
        last = (last * a) % 10;
    }

    console.log(last || 10);
}