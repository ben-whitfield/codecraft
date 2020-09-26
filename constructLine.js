const buildNumberParts = require('./segments');

const constructLine = (lineArray, linePart, userSize) => {
    let completedLine = ``
    lineArray.forEach(element => {
        const numberParts = buildNumberParts(element, userSize)
        completedLine += `${numberParts[element][linePart]}${' '.repeat(parseInt(userSize/2))}`
    })
    return completedLine
}

module.exports = constructLine