// [BOJ] 11286 절댓값 힙
// https://www.acmicpc.net/problem/11286

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class AbsMinHeap {
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

        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (!this._isHigherPriority(index, parentIndex)) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;

        while (index < this.heap.length) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let smallestIndex = index;

            if (leftIndex < this.heap.length && this._isHigherPriority(leftIndex, smallestIndex)) {
                smallestIndex = leftIndex;
            }

            if (rightIndex < this.heap.length && this._isHigherPriority(rightIndex, smallestIndex)) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    _isHigherPriority(i, j) {
        const a = this.heap[i];
        const b = this.heap[j];

        if (Math.abs(a) < Math.abs(b)) return true;
        if (Math.abs(a) === Math.abs(b) && a < b) return true;

        return false;
    }
}

const n = Number(input[0]);
const heap = new AbsMinHeap();

for (let i = 1; i <= n; i++) {
    const num = Number(input[i]);

    if (num === 0) {
        console.log(heap.pop());
    } else {
        heap.push(num);
    }
}
