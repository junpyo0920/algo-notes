// [BOJ] 7662 이중 우선순위 큐
// https://www.acmicpc.net/problem/7662

const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString();

let idx = 0;

function nextLine() {
    while (idx < data.length) {
        let start = idx;
        while (idx < data.length && data[idx] !== '\n') idx++;
        const line = data.slice(start, idx).trim();
        idx++;
        
        if (line) return line; 
    }
    return "";
}

class Heap {
    constructor(type) {
        this.heap = [];
        this.type = type;
    }
    
    size() { return this.heap.length; }

    peek() { return this.size() > 0 ? this.heap[0] : null; }

    push(n) {
        this.heap.push(n);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];

        this.heap[0] = this.heap.pop();
        this._heapifyDown();

        return top;
    }

    _compare(a, b) {
        if (a === b) return false;
        
        if (this.type === 'MAX') return a > b;
        return a < b;
    }

    _heapifyUp() {
        let i = this.size() - 1;

        while (i > 0) {
            const pIdx = Math.floor((i - 1) / 2);

            if (!this._compare(this.heap[i], this.heap[pIdx])) break;

            [this.heap[i], this.heap[pIdx]] = [this.heap[pIdx], this.heap[i]];
            i = pIdx;
        }
    }

    _heapifyDown() {
        let i = 0;

        while (true) {
            const l = i * 2 + 1;
            const r = i * 2 + 2;

            let t = i;

            if (l < this.size() && this._compare(this.heap[l], this.heap[t])) t = l;
            if (r < this.size() && this._compare(this.heap[r], this.heap[t])) t = r;

            if (t === i) break;

            [this.heap[i], this.heap[t]] = [this.heap[t], this.heap[i]];
            i = t;
        }
    }
}

function getValidTop(heap, count) {
    while (heap.size()) {
        const value = heap.peek();

        if ((count.get(value) || 0) > 0) return value;
        
        heap.pop();
    }
    return null;
}

const tc = Number(nextLine());
let output = [];

for (let t = 0; t < tc; t++) {
    const k = Number(nextLine());
    
    const maxH = new Heap('MAX');
    const minH = new Heap('MIN');
    const count = new Map();
    let size = 0;

    for (let i = 0; i < k; i++) {
        const line = nextLine();
        if (!line) continue;
        
        const cmd = line[0];
        const num = Number(line.slice(1));

        if (cmd === 'I') {
            maxH.push(num);
            minH.push(num);

            count.set(num, (count.get(num) || 0) + 1);
            size++;
        } else {
            if (size === 0) continue;

            let heap = num === 1 ? maxH : minH;

            while (heap.size()) {
                const value = heap.pop();
                if ((count.get(value) || 0) > 0) {
                    count.set(value, count.get(value) - 1);
                    size--;
                    break;
                }
            }
            
            if (size === 0) {
                maxH.heap = [];
                minH.heap = [];
                count.clear();
            }
        }
    }

    if (size === 0) {
        output.push('EMPTY');
    } else {
        const max = getValidTop(maxH, count);
        const min = getValidTop(minH, count);
        output.push(`${max} ${min}`);
    }
}

console.log(output.join('\n'));
