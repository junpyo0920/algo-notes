let answer = [];
let set = 0;

for (const line of require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)) {
    const [command, x] = line.split(' ');

    switch(command) {
        case "add":
            set |= (1 << +x);
            break;
        case "remove":
            set &= ~(1 << +x);
            break;
        case "check":
            answer.push((set & (1 << +x) ? 1 : 0));
            break;
        case "toggle":
            set & (1 << +x) ? set &= ~(1 << +x) : set |= (1 << +x);
            break;
        case "all":
            set = 2097150;
            break;
        case "empty":
            set = 0;
            break;
        default:
            throw Error(`UNKNOWN COMMAND: ${command}`);
    }
}

console.log(answer.join('\n'));
