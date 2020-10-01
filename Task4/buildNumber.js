const segments = require('./segments');

function buildTop(char, size) {
    return ` ${char.repeat(parseInt(size))} `
}

function buildLeft(char, size) {
    return ` ${char,' '.repeat(parseInt(size-1))} `
}
function buildRight(char, size) {
    return ` ${' '.repeat(parseInt(size-1),char)} `
}

function buildMid(left, middle, right, size) {
    return ` ${left,middle.repeat(parseInt(size-2)), right}`
}

const charValues = { 'A': "_", 'B': "|", 'C': "|", 'D': "_", "E": '|', "F": '|', "G": '_' }

const builtSections = (num) => {
    const numberSections = { 'A': ``, 'B': ``, 'C': ``, 'D': ``, 'E': ``, 'F': ``, 'G': `` }
    const numberStructure = segments(num)
    for ( const item in numberStructure ) {
        numberStructure[item] === 1 ? numberSections[item] = charValues[item] : numberSections[item] = ' '
    }
    return numberSections
}

const buildNumber = (num, scale) => {
    let builtNumber = ``
    
    builtNumber `${' '.repeat(parseInt(size))}`
    
    
    return builtNumber
}

console.log(buildNumber(4,1))
// module.exports = buildNumber