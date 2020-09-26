const constructLine = require('./constructLine');
const charArray = require('./constructArray');

const userNumber = process.argv[2];
const userSize = process.argv[3];

const screenOutput = function (userNumber, userSize) {
    if(userSize < 2) userSize = 2
    const lineArray = charArray(userNumber)
    const totalLines = (userSize * 2)
    const midLine = parseInt(userSize)

    for (let currLine = 0; currLine < totalLines+1; currLine++) {
        if (currLine === 0) { console.log(constructLine(lineArray, 'top', userSize)) } 
        else if (currLine === totalLines) { console.log(constructLine(lineArray, 'bottom', userSize)) }
        else if (currLine === midLine) { console.log(constructLine(lineArray, 'middle', userSize)) }
        else if (currLine > midLine) { console.log(constructLine(lineArray, 'lowerFiller', userSize)) }
        else if (currLine < midLine) { console.log(constructLine(lineArray, 'upperFiller', userSize)) }
    }  
};

console.log('The User Input was:', userNumber, 'and the size was: ', userSize)
console.log('The output is:')
screenOutput(userNumber, userSize)
console.log(``)