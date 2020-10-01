const constructLine = require('./constructLine');
const charArray = require('./constructArray');
const customOut = require('./utilities');

const userNumber = process.argv[2];
const userSize = process.argv[3];
const screenWidth = 40

const outputCount = (letterCount, letterSize) => {
    return 4
    // return ((letterCount * letterSize) + (letterCount * 2))
}

function repeatLine(repeats, lineArray, pos, userSize ) {
    let output = ``
    for (let index = 0; index < repeats; index++) {
        output += `${constructLine(lineArray, pos, userSize)}`
    }
    return output
}

const screenOutput = function (userNumber, userSize) {
    if(userSize < 2) userSize = 2
    const lineArray = charArray(userNumber)
    const letterCount = lineArray.length
    const totalLines = (userSize * 2)
    const midLine = parseInt(userSize)

    customOut.clearScreen
    console.clear();
    
    let index = screenWidth;

    const myInterval = setInterval(() => {
        index-- 
            let completeOutput;
            for (let currLine = 0; currLine < totalLines+1; currLine++) {
                let output = ``
                if (currLine === 0) { output = repeatLine(outputCount(letterCount, userSize), lineArray, 'top', userSize) } 
                else if (currLine === totalLines) { output = repeatLine(outputCount(letterCount, userSize), lineArray, 'bottom', userSize) }
                else if (currLine === midLine) { output = repeatLine(outputCount(letterCount, userSize), lineArray, 'middle', userSize) }
                else if (currLine > midLine) { output = repeatLine(outputCount(letterCount, userSize), lineArray, 'lowerFiller', userSize) }
                else if (currLine < midLine) { output = repeatLine(outputCount(letterCount, userSize), lineArray, 'upperFiller', userSize) }
                if(index < 1) {
                    index = screenWidth
                }
                spaces = `${' '.repeat(parseInt(index))}`
                lineOutput = `${spaces+output}`
                completeOutput = `${completeOutput}\n${lineOutput}`
            }
            process.stdout.write('\033[H')
            process.stdout.write(`${completeOutput}`)
            customOut.hide;
            
        // if(index === 0) {
        //     clearInterval(myInterval)
        // }
    }, 100);
};

screenOutput(userNumber, userSize)