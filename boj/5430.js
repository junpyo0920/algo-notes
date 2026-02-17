// [BOJ] 5430 AC
// https://www.acmicpc.net/problem/5430

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class AC {
    constructor(n, array) {
        this.arr = this._convert(array, n);
        this.start = 0;
        this.end = n - 1;
        this.reversed = false;
    }

    _convert(strArr, n) {
        if (n === 0) return [];

        return strArr
            .slice(1, -1)
            .split(',');
    }

    reverse() {
        this.reversed = !this.reversed;
    }

    delete() {
        if (this.start > this.end) throw Error('error');

        if (this.reversed) this.end--;
        else this.start++;
    }

    toString() {
        if (this.start > this.end) return '[]';

        let result = [];

        if (!this.reversed) {
            for (let i = this.start; i <= this.end; i++) {
                result.push(this.arr[i]);
            }
        } else {
            for (let i = this.end; i >= this.start; i--) {
                result.push(this.arr[i]);
            }
        }

        return `[${result.join(',')}]`;
    }
}

let output = [];

for (let tc = 1; tc < input.length; tc += 3) {
    try {
        const commands = input[tc];
        const n = Number(input[tc + 1]);
        const arr = input[tc + 2];

        const ac = new AC(n, arr);

        for (const c of commands) {
            if (c === 'R') ac.reverse();
            else if (c === 'D') ac.delete();
            else throw Error("unknown command");
        }

        output.push(ac.toString());
    } catch (error) {
        output.push(error.message);
    }
}

console.log(output.join('\n'));