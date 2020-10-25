const displayWidth = 120

const buildDisplay = (endTime, startPos) => {
    const stringLines = endTime.split('\n')
    const newString = stringLines
    
    while (newString[0].length < displayWidth ) {
        for (let index = 0; index < stringLines.length; index++) {
            newString[index] = `${newString[index]} ${newString[index]}`
        }
    }

    let displayString = ``
    newString.forEach(element => {
        displayString += `${element.slice(0, displayWidth)}\n`
    });
   
    return displayString
}

module.exports = buildDisplay