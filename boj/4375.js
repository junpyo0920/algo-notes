const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const tc = +lines[i];

    let remainder = 1 % tc;
    let length = 1;

    while (remainder) {
        remainder = (remainder * 10 + 1) % tc;
        length++;
    }

    console.log(length);
}