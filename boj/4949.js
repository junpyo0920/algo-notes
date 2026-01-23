const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const lines = input.split('\n');

for (const line of lines) {
    if (line === '.') break;

    let valid = true;

    const stack = [];
    for (const ch of line) {
        if (ch === '(' || ch === '[') stack.push(ch);

        if (ch === ')' && stack.pop() !== '(') {
            valid = false;
            break;
        }

        if (ch === ']' && stack.pop() !== '[') {
            valid = false;
            break;
        }
    }

    if (stack.length) valid = false;

    console.log(valid ? 'yes' : 'no');
}