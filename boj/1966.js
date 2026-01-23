const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const lines = input.split('\n');

for (let tc = 0; tc < +lines[0]; tc++) {
    const [n, m] = lines[tc * 2 + 1].split(' ').map((e) => +e);
    const queue = Array.from(lines[tc * 2 + 2].split(' ').map((e, i) => [+e, i === m]));

    let i = 1;
    while (queue.length) {
        const [cur, isTarget] = queue.shift();
        if (queue.some(([e, _]) => e > cur)) queue.push([cur, isTarget]);
        else if (isTarget) console.log(i);
        else i++;
    }
}
