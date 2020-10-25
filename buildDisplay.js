const displayWidth = 120

const buildDisplay = (endTime, startPos) => {
    const stringLines = endTime.split('\n')
    const newString = stringLines
    const display = displayWidth + startPos
    
    while (newString[0].length < display) {
        for (let index = 0; index < stringLines.length; index++) {
            newString[index] = `${newString[index]}         ${newString[index]}`
        }
    }

    let displayString = ``
    newString.forEach(element => {
        displayString += `${element.slice(startPos, display)}\n`
    });
   
    return displayString
}

module.exports = buildDisplay