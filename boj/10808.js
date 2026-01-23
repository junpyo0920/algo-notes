import { readFileSync } from 'fs'
const input = readFileSync('/dev/stdin').toString().trim()

const counts = Array.from({ length: 26 }, () => 0)

for (const ch of input) {
    counts[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
}

console.log(...counts)