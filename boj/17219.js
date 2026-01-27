const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split(`\n`);
const [N, M] = lines[0].split(' ').map(e => +e);

const map = new Map();

for (let i = 1; i <= N; i++) {
    const [site, pw] = lines[i].split(' ');
    map.set(site, pw);
}

for (let i = N + 1; i <= N + M; i++) {
    console.log(map.get(lines[i]));
}