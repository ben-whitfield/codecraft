const segments = require('./segments');

const charValues = { 'A': "_", 'B': "|", 'C': "|", 'D': "_", "E": '|', "F": '|', "G": '_' }

const builtSections = (num) => {
    const numberSections = { 'A': ``, 'B': ``, 'C': ``, 'D': ``, 'E': ``, 'F': ``, 'G': `` }
    const numberStructure = segments(num)
    for ( const item in numberStructure ) {
        numberStructure[item] === 1 ? numberSections[item] = charValues[item] : numberSections[item] = ''
    }
    return numberSections
}

const buildNumber = (num, scale) => {
    // construct the string output
    let builtNumber = ``
    
    builtNumber `${' '.repeat(parseInt(size))}`
    
    
    return builtNumber
}

console.log(buildNumber(4,1))
// module.exports = buildNumber