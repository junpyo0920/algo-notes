const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const lines = input.split('\n');
const [N, M] = lines[0].split(' ').map(e => +e);

const mat = Array(N);

for (let i = 1; i <= N; i++) {
    mat[i - 1] = lines[i].split(' ').map(e => +e);
}

const K = +lines[N + 1];

for (let index = N + 2; index <= N + K + 1; index++) {
    let sum = 0;

    const [i, j, x, y] = lines[index].split(' ').map(e => +e - 1);

    for (let row = i; row <= x; row++) {
        for (let col = j; col <= y; col++) {
            sum += mat[row][col];
        }
    }

    console.log(sum);
}