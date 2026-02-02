const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');

let t = 1;

while (t < lines.length) {
    const n = +lines[t];

    const map = new Map();

    for (let i = t + 1; i <= n + t; i++) {
        const [_, category] = lines[i].split(' ');
        const count = map.get(category) || 1;
        map.set(category, count + 1);
    }

    const cases = Array.from(map.values()).reduce((acc, cur) => acc * cur, 1);
    console.log(cases - 1);

    t += n + 1;
}
