const constructLine = require('./constructLine');
const charArray = require('./constructArray');
const customOut = require('./utilities');

const userNumber = process.argv[2];
const userSize = process.argv[3];
const screenWidth = 120

const screenOutput = function (userNumber, userSize) {
    if(userSize < 2) userSize = 2
    const lineArray = charArray(userNumber)
    const totalLines = (userSize * 2)
    const midLine = parseInt(userSize)

    customOut.clearScreen
    console.clear();
    console.log('starting')
    
    let index = screenWidth;

    const myInterval = setInterval(() => {
        index-- 
            let completeOutput;
            for (let currLine = 0; currLine < totalLines+1; currLine++) {
                let output = ``
                if (currLine === 0) { output = constructLine(lineArray, 'top', userSize) } 
                else if (currLine === totalLines) { output = constructLine(lineArray, 'bottom', userSize) }
                else if (currLine === midLine) { output = constructLine(lineArray, 'middle', userSize) }
                else if (currLine > midLine) { output = constructLine(lineArray, 'lowerFiller', userSize) }
                else if (currLine < midLine) { output = constructLine(lineArray, 'upperFiller', userSize) }
                spaces = `${' '.repeat(parseInt(index))}`
                lineOutput = `${spaces+output}`
                completeOutput = `${completeOutput}\n${lineOutput}`
            }
            process.stdout.write('\033[H')
            process.stdout.write(`${completeOutput}`)
            customOut.hide;
            
        if(index === 0) {
            clearInterval(myInterval)
        }
    }, 100);
};

// console.log('The User Input was:', userNumber, 'and the size was: ', userSize)
// console.log('The output is:')
screenOutput(userNumber, userSize)
// console.log(``)