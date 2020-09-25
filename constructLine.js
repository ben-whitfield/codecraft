const segments = require('./segments');

//takes two args, the valid input array and line no
const constructLine = (lineArray, lineNo) => {
    let completedLine = ``
    lineArray.forEach(element => {
        completedLine += ` ${numberStructures[element][lineNo]}`
    })
    return completedLine
}

module.exports = constructLine