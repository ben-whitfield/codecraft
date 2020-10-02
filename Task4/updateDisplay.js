
const updateDisplay = (endTime) => {
    process.stdout.write('\033[H')
    process.stdout.write(`${endTime}`)
}

module.exports = updateDisplay