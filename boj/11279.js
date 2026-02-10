// [BOJ] 11279 최대 힙
// https://www.acmicpc.net/problem/11279

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(n) {
        this.heap.push(n);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];

        this.heap[0] = this.heap.pop();
        this._heapifyDown();

        return top;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] <= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;

        while (true) {
            const leftIndex = (index * 2) + 1;
            const rightIndex = (index * 2) + 2;
            let biggestIndex = index;

            if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[biggestIndex]) {
                biggestIndex = leftIndex;
            }

            if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[biggestIndex]) {
                biggestIndex = rightIndex;
            }

            if (index === biggestIndex) break;

            [this.heap[index], this.heap[biggestIndex]] = [this.heap[biggestIndex], this.heap[index]];

            index = biggestIndex;
        }
    }
}

const heap = new MaxHeap();

const output = [];

for (let i = 1; i <= n; i++) {
    const num = Number(input[i]);

    if (num !== 0) {
        heap.push(num);
        
    } else {
        output.push(heap.pop());
    }
}

console.log(output.join('\n'));
