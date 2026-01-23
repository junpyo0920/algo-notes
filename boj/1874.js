const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const lines = input.split('\n').map((e) => +e);

let nums = Array.from({ length: lines[0] }, (_, i) => lines[0] - i);
const stack = [];

let ans = [];
let valid = true;

for (const target of lines.slice(1)) {
    while (valid) {
        const top = stack[stack.length - 1];

        if (top === target) {
            stack.pop();
            ans.push('-');
            break;
        }

        if (top || 0 < target) {
            if (nums.length === 0) {
                valid = false;
                break;
            }
            stack.push(nums.pop());
            ans.push('+');
        } else {
            stack.pop();
            ans.push('-');
        }
    }
}

console.log(valid ? ans.join('\n') : 'NO');