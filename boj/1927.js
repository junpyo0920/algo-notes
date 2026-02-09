// [BOJ] 1927 최소 힙
// https://www.acmicpc.net/problem/1927

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(n) {
        this.heap.push(n);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return 0;
        if (this.size() === 1) return this.heap.pop();

        let top = this.heap[0];

        this.heap[0] = this.heap.pop();
        this._heapifyDown();

        return top;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.size() - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parent]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.size();

        while (true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (index === smallest) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

const n = Number(input[0]);
const minHeap = new MinHeap();

const output = [];

for (let i = 1; i <= n; i++) {
    const item = Number(input[i]);
    if (item === 0) output.push(minHeap.pop());
    else minHeap.push(item);
}

console.log(output.join('\n'));
