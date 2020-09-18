const constructLine = require('./constructLine');
const charArray = require('./constructArray');

const userInput = process.argv[2];

const screenOutput = function (userInput) {
    const lineArray = charArray(userInput)
    for (let index = 0; index < 3; index++) {
        console.log(constructLine(lineArray, index))
    }  
};

console.log('The User Input was:', userInput)
console.log('The output is:')
screenOutput(userInput)
console.log(``)