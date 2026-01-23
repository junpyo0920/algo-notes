const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const lines = input.split('\n');

const queue = [];
for (const line of lines) {
    if (+line) continue;

    const [com, num] = line.split(' ');

    if (com === 'push') queue.push(num);
    else if (com === 'pop') console.log(queue.shift() || -1);
    else if (com === 'size') console.log(queue.length);
    else if (com === 'empty') console.log(+(queue.length === 0));
    else if (com === 'front') console.log(queue[0] || -1);
    else if (com === 'back') console.log(queue[queue.length - 1] || -1);
}