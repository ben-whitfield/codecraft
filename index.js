const constructLine = require('./constructLine');
const charArray = require('./constructArray');

const userNumber = process.argv[2];
const userSize = process.argv[3];

const screenOutput = function (userNumber, userSize) {
    if(userSize < 2) userSize = 2
    const lineArray = charArray(userNumber)
    const totalLines = (userSize * 2) + 1
    const midLine = parseInt(userSize) + 1

    for (let currLine = 0; currLine < totalLines+1; currLine++) {
        if (currLine === 0) { 
            // console.log('top')
            console.log(constructLine(lineArray, 'top', userSize)) 
        } 
        else if (currLine === totalLines) { 
            // console.log('bottom')
            console.log(constructLine(lineArray, 'bottom', userSize)) 
        }
        else if (currLine === midLine) { 
            // console.log('middle')
            console.log(constructLine(lineArray, 'middle', userSize)) 
        }
        else if (currLine > midLine) { 
            // console.log('lowerFiller')
            console.log(constructLine(lineArray, 'lowerFiller', userSize)) 
        }
        else if (currLine < midLine) { 
            // console.log('upperFiller')
            console.log(constructLine(lineArray, 'upperFiller', userSize)) 
        }
    }  
};

console.log('The User Input was:', userNumber, 'and the size was: ', userSize)
console.log('The output is:')
screenOutput(userNumber, userSize)
console.log(``)