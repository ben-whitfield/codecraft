const buildNumberParts = require('./segments');

//takes two args, the valid input array and line no
const constructLine = (lineArray, linePart, userSize) => {
    let completedLine = ``
    lineArray.forEach(element => {
        const numberParts = buildNumberParts(element, userSize)
        completedLine += `${numberParts[element][linePart]} `
    })
    return completedLine
}

module.exports = constructLine