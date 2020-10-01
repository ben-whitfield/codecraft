let out = process.stdout

let clearScreen = () => {
    out.write('\u001b[2J');
}

let clearLine = () => {
    out.write('\033[H');
}

let hide = () => {
    out.write('\x1B[?25l');
}

module.exports = out;