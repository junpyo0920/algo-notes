const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

function getFactorial(n) {
    let ret = 1

    while (true) {
        if (n <= 1) return ret
        ret *= n--
    }
}

const [a, b] = input.split(" ").map((e) => +e)

console.log(getFactorial(a) / getFactorial(b) / getFactorial(a - b))