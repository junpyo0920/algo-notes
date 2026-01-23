const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const strings = input.split('\n');

let number = 0;

for (const s of strings) {
    if (number === 0 && !Number.isNaN(+s)) {
        number = +s;
        continue;
    }

    if (number !== 0) number++;
}

number++;

if (number % 3 === 0 && number % 5 === 0) console.log("FizzBuzz");
else if (number % 3 === 0) console.log("Fizz");
else if (number % 5 === 0) console.log("Buzz");
else console.log(number);