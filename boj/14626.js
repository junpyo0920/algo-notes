const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let indexOfStar = input.indexOf('*');

let acc = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === "*") continue;
    acc += (+input[i] * (i % 2 ? 3 : 1));
}

let ans = 10 - (acc % 10);

if (indexOfStar % 2) {
    for (let i = 0; i < 10; i++) {
        if ((acc + 3 * i) % 10 === 0) {
            ans = i;
            break;
        }
    }
}

console.log(ans);