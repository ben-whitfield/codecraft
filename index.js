const constructLine = require('./constructLine');
const charArray = require('./constructArray');

const userNumber = process.argv[2];
const userSize = process.argv[3];

const screenOutput = function (userNumber, userSize) {
    const lineArray = charArray(userNumber)
    

};

console.log('The User Input was:', userNumber, 'and the size was: ', userSize)
console.log('The output is:')
screenOutput(userNumber, userSize)
console.log(``)