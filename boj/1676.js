const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const factorial = (n) => {
    let ret = BigInt(1);

    for (let i = n; i > 1; i--) {
        ret *= BigInt(i);
    }

    return ret;
}

let ans = 0;

for (let num of [...(''+factorial(+input))].reverse()) {
    if (num !== '0') break;
    ans++;
}

console.log(ans);