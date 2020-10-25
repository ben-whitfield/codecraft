const buildDisplay = require('./buildDisplay');

let startX = 0

const updateDisplay = (endTime) => {
    process.stdout.write('\033[H')
    process.stdout.write(`${buildDisplay(endTime, startX)}`)
    startX ++
}

module.exports = updateDisplay